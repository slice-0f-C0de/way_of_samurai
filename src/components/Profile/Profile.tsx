import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: {
        photos: {
            small: string,
            large: string
        }
    }
}

export const Profile = (props: ProfilePropsType) => {

    return <div className={c.content}>
            <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}