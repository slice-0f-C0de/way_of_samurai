import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {

    return <div className={c.content}>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}