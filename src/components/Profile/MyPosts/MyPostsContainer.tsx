import React, {ChangeEvent} from "react";
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store._state.profilePage.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updatePostTextActionCreator(e.currentTarget.value))
    }

    return <MyPosts store={props.store} addPost={addPost} onPostChange={onPostChange} />
}