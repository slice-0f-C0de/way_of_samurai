import React, {ChangeEvent, createElement} from "react";
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

    let postsElements = props.store._state.profilePage.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
        }
    }

    return <div className={c.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.store._state.profilePage.newPostText} onChange={onPostChange} ref={newPostElement}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}