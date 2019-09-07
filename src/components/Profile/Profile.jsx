import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}x
                     posts={props.state.posts} />
        </div>
    )
}

export default Profile;