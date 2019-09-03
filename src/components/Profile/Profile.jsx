import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://d32k22adwkwumx.cloudfront.net/wp-content/uploads/2017/10/koh-nang-yuan-BEACH-THAILAND0316.jpg" alt=""/>
            </div>
            <div className={s.ava}>
                ava + description
                {/*<img src="https://yandex.ru/images/search?text=user%20image&stype=image&lr=10725&source=wiz&pos=0&img_url=https%3A%2F%2Fwog.ua%2Fimages%2Fuser_icon.png&rpt=simage" alt=""/>*/}
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;