import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import WeatherContainer from '../weather/weatherContainer';
import { useState } from 'react';
import LoginBlock from './LoginBlock';

const Header = (props) => {



    console.log('render')

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <h1>Vpizde</h1>
            </div>
            <LoginBlock {...props} />
            {/* <div className={s.weatherContainer}> */}
            <WeatherContainer />
            {/* </div> */}
        </header>
    );
}
export default Header;