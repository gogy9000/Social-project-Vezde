import React from 'react';
import s from './navbar.module.css';

import { NavLink } from 'react-router-dom';
import FrendsNavbar from './Frends/FrendsNavbar';

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
      <NavLink to="/Search" activeClassName={s.activeLink}> Поиск  </NavLink><br />
      <div className={s.Frends}>
        <NavLink to="/Frends" activeClassName={s.activeLink}> <FrendsNavbar />  </NavLink>
      </div>
    </div>
  );
}
export default Navbar;