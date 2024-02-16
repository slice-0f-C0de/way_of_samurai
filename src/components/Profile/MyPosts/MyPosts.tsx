import React from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css"

export type PostsType = {
    id: number
    message: string
    likes: number
}

type PropsType = {
    posts: PostsType[]
    newPostText: string
    updatePostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
            props.updatePostText(newPostElement.current!.value)
        }

    return <div className={c.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}/>
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