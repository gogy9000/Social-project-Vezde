import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN1aHcEjTCfF7jhxIcJB1jyL_4BYEvoZRdQ&usqp=CAU' />
           <div className={s.logo}>
              <h1>Vpizde</h1>
           </div>
        </header>
    );
}
export default Header;