import React from 'react';
import s from './navbar.module.css';

import { NavLink } from 'react-router-dom';
import Frends from './Frends/Frends';

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.Item}>
        <NavLink to="/profile" activeClassName={s.activeLink}  > Профиль </NavLink><br />
      </div>
      <NavLink to="/Dialogs" activeClassName={s.activeLink}> Сообщения </NavLink> <br />
      <NavLink to="/Users" activeClassName={s.activeLink}> Users </NavLink> <br />
      <NavLink to="/Galery" activeClassName={s.activeLink}>галерея </NavLink> <br />
      <NavLink to="/Music" activeClassName={s.activeLink}> Музыка </NavLink> <br />
      <NavLink to="/Settings" activeClassName={s.activeLink}> Настройки  </NavLink><br />
      <div className={s.Frends}>
        <NavLink to="/Frends" activeClassName={s.activeLink}> <Frends />  </NavLink>
      </div>
    </div>
  );
}
export default Navbar;