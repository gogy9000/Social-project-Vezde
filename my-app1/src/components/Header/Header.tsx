import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import WeatherContainer from '../weather/weatherContainer';
import { useState, FC } from 'react';
import LoginBlock from './LoginBlock';

type PropsTypes = {
    isAuth: boolean
    logout: () => void
    Login: string
}

const Header: FC<PropsTypes> = (props) => {





    return (
        <header className={s.header}>
            <div className={s.logo}>
                <h1>Vezde</h1>
            </div>
            <LoginBlock {...props} />

            <WeatherContainer />

        </header>
    );
}
export default Header;