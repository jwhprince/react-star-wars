import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_SEARCHH } from '@constants/api';
import { getPeopleId, getPeopleImage,} from '@services/getPeopleData';
import  UiInput  from '@components/Input';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';

import styles from './SearchPage.module.css';

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
           const res = await getApiResource(API_SEARCHH+param);

           if (res) {
               const peopleList = res.results.map(({name, url}) => {
                   const id = getPeopleId(url);
                   const img = getPeopleImage(id);
                    return {
                        id: id,
                        name: name,
                        img: img,

                    }
               })
             setPeople(peopleList);
             setErrorApi(false);
           } else {
            setErrorApi(true);
           }
    }

    useEffect(() => {
        getResponse('') ;
    }, []);

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []

    );
    
    
    const handleInputChange = value => {
        
             setInputSearchValue(value);
             debounceGetResponse(value)
    }
  
    return (
    <>
     <h1 className="header__text">Search</h1>
     <UiInput
         
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
     />
     <SearchPageInfo people={people} />
     
    </>
  )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);