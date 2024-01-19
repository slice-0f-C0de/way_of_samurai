import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css"
import {ActionsType, PostsType} from "../../../Redux/state";

type PropsType = {
    profilePage: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: PropsType) => {

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', postText: props.newPostText})
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
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