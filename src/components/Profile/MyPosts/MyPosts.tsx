import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css"
import {PostsType, StoreType} from "../../../Redux/state";

type PropsType = {
    profilePage: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const MyPosts = (props: PropsType) => {

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    let postsElements = props.profilePage.map(post => <Post message={post.message} likes={post.likes}/>)

    return <div className={c.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange}/>
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