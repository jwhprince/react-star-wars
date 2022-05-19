import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import styles from './People.module.css';

const PeoplePage = () => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResource(url);

        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id);
            
            return {
                name,
                url,
                img
            }
        })
        setPeople(peopleList);
    }


    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);

    return (
        <>
            {people && (

                <ul>
                    {people.map(({ id, name, img }) =>
                        <li key={id}>
                            <img src={img} alt={name} />
                            <p>{name}</p>
                        </li>
                    )}
                </ul>
            )}
        </>
    )
}

export default PeoplePage;