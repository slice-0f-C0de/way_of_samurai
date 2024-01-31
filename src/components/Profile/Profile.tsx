import React from "react";
import c from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostsType} from "../../Redux/store";

type PropsType = {
    profilePage: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: PropsType) => {

    return <div className={c.content}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
        />
    </div>
}