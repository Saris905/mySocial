import React from 'react';
import s from './Navbar.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={`${s.item} ${s.newItem}`} href="#">Profile</a>
            </div>
            <div>
                <a className={s.item} href="#">Messages</a>
            </div>
            <div>
                <a className={s.item} href="#">News</a>
            </div>
            <div>
                <a className={s.item} href="#">Music</a>
            </div>
            <div>
                <a className={s.item} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Nav;