import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div className={s.friends}>
           <p>Friends</p>
            <div className={s.block}>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <div className={s.item}></div>
            </div>
        </div>
    )
}

export default Friends;