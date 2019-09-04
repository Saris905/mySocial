import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://d32k22adwkwumx.cloudfront.net/wp-content/uploads/2017/10/koh-nang-yuan-BEACH-THAILAND0316.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;