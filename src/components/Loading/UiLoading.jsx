import PropTypes from 'prop-types';
import LoaderLight from './img/loader-light.svg';
import LoaderDark from './img/loader-dark.svg';
import LoaderBlue from './img/loader-blue.svg';
import styles from './UiLoading.module.css';
import { useState, useEffect } from 'react';

const UiLoading = ({ theme = 'light' }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'dark':
                setLoaderIcon(LoaderDark);
                break;
            case 'light':
                setLoaderIcon(LoaderLight);
                break;
            case 'blue':
                setLoaderIcon(LoaderBlue);
                break;

            default: setLoaderIcon(LoaderDark);
                break;
        }
    }, [])

    return (
        <img className={styles.loader}
            src={loaderIcon}
            alt="LOader"
        />
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,

}


export default UiLoading;
