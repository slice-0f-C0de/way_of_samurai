import React from "react";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (text: string) => {
           dispatch(updatePostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
