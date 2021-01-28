import React from 'react';
import s from './navbar.module.css';
import Masages from './Masages/Masages';
import Music from './Music/Music'
import Profile1 from './Profile./Profile1'
import Settings from './Settings/Settings'
import { NavLink } from 'react-router-dom';
import Profile from '../Profile/profile';

const Nav = () => {
  return (
    <div className={s.navbar}>
      <div className={s.Item}>
        <NavLink to="/profile" activeClassName={s.activeLink}  > Profile </NavLink>
      </div>
       <NavLink to="/Dialogs" activeClassName={s.activeLink}> <Masages />  </NavLink>
       <NavLink to="/Music" activeClassName={s.activeLink}> Music </NavLink> 
       <NavLink to="/Settings" activeClassName={s.activeLink}> Settings  </NavLink> 
   </div> 
  );
}
export default Nav;