import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     posts={props.state.posts} />
        </div>
    )
}

export default Profile;