import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
       <div className={s.item}>
           <img src="https://stavik.ru/sites/default/files/styles/personal/public/personal_photo/default_man_photo.jpg" alt="image"/>
           <p>{ props.message }</p>
           <span>Like </span>{ props.likesCount }
       </div>

    )
}

export default Post;