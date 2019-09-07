import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={s.dialog}>
                <img src="https://stavik.ru/sites/default/files/styles/personal/public/personal_photo/default_man_photo.jpg" alt="image"/>
                <p>{props.name}</p>
            </div>
        </NavLink>
    )
}

export default DialogItem;