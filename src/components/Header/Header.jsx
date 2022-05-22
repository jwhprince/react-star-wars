import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import Favorite from '@components/Favorite';
import imgDroid from './img/droid.svg';
import imglightsaber from './img/lightsaber.svg';
import imgSpace from './img/space-station.svg';
import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgSpace);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imglightsaber); break;
            case THEME_DARK: setIcon(imgSpace); break;
            case THEME_NEUTRAL: setIcon(imgDroid); break;
            default: setIcon(imgSpace);

        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='logo' />
            <ul className={styles.list__container}>
                <li> <NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/people/?page=1" >People</NavLink> </li>
                <li><NavLink to="/search" >Search</NavLink> </li>
                <li><NavLink to="/not-found" >Not Found</NavLink> </li>
                <li><NavLink to="/fail" >Fail</NavLink> </li>

            </ul>
            <Favorite />
        </div>
    )
}

export default Header;
