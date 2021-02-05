import React from 'react';
import s from './navbar.module.css';
import Masages from './Masages/Masages';
import Music from './Music/Music'
import Profile1 from './Profile./Profile1'
import Settings from './Settings/Settings'
import { NavLink } from 'react-router-dom';
import Profile from '../Profile/profile';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.Item}>
        <NavLink to="/profile" activeClassName={s.activeLink}  > Профиль </NavLink>
      </div>
       <NavLink to="/Dialogs" activeClassName={s.activeLink}> Сообщения </NavLink>
       <NavLink to="/Music" activeClassName={s.activeLink}> Музыка </NavLink> 
       <NavLink to="/Settings" activeClassName={s.activeLink}> Настройки  </NavLink> 
   </div> 
  );
}
export default Navbar;