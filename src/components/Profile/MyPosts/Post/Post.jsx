import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
       <div className={s.item}>
           <img src="https://avatars.mds.yandex.net/get-pdb/1522705/f34f78ad-badf-4a0c-891e-174a55617fdb/s1200?webp=false" alt="image"/>
           <p>{ props.message }</p>
           <span>Like</span>{ props.count }
       </div>

    )
}

export default Post;