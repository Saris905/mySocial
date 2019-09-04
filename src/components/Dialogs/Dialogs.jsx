import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Den'},
        { id: 2, name: 'Stas'},
        { id: 3, name: 'Ilya'},
        { id: 4, name: 'Ivan'},
        { id: 5, name: 'Sasha'}
        ];

    let messagesData = [
        { id: 1, message: 'hi!'},
        { id: 2, message: 'What\'s up?!'},
        { id: 3, message: 'How are you?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].name} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].name} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;