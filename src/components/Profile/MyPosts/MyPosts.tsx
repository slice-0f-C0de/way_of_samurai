import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css"
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";

type PropsType = {
    store: StoreType
    addPost: () => void
    onPostChange: (text: string) => void
}

export const MyPosts = (props: PropsType) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(props.store._state.profilePage.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updatePostTextActionCreator(e.currentTarget.value))
    }

    let postsElements = props.store._state.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    return <div className={c.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.store._state.profilePage.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}