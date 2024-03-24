import React from "react";
import Post from "./Post/Post";
import c from "./MyPosts.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostsType = {
    id: number
    message: string
    likes: number
}

type PropsType = {
    posts: PostsType[]
    newPostText: string
    updatePostText: (text: string) => void
    addPost: (values: any) => void
}

type PostsDataType = {
    post: string
    newMessageText: string
}

const PostsForm: React.FC<InjectedFormProps<PostsDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'input'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const MyPostsReduxForm = reduxForm<PostsDataType>({form: 'post'})(PostsForm)

export const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    const onPostChange = () => {
        props.updatePostText(newPostElement.current!.value)
    }

    return <div className={c.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <MyPostsReduxForm onSubmit={onAddPost} />
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}