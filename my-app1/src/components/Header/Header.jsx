import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import WeatherContainer from '../weather/weatherContainer';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN1aHcEjTCfF7jhxIcJB1jyL_4BYEvoZRdQ&usqp=CAU' />
            <div className={s.logo}>
                <h1>Vpizde</h1>
            </div>
            <div className={s.loginBlock} >
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
            <WeatherContainer />

        </header>
    );
}
export default Header;