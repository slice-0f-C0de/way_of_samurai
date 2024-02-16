import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return <div className={c.content}>
            <ProfileInfo />
        <MyPostsContainer />
    </div>
}