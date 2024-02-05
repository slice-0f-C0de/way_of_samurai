import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType, store} from "../../../Redux/store";

    const mapStateToProps = (state: StateType) => {
        return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }

    const mapDispatchToProps = (dispatch: any) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator(store._state.profilePage.newPostText))
            },
            onPostChange: (text: string) => {
                dispatch(updatePostTextActionCreator(text))
            }
        }
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default  MyPostsContainer