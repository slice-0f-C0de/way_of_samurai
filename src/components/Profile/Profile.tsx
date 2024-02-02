import React from "react";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: StoreType
}

export const Profile = (props: PropsType) => {

    return <div className={c.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>
}