import React from "react";
import c from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, StoreType} from "../../Redux/state";

type PropsType = {
    profilePage: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const Profile = (props: PropsType) => {

    return <div className={c.content}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
                 newPostText={props.newPostText}
        />
    </div>
}