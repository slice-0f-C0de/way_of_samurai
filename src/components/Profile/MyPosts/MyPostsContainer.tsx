import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {StateType, store} from "../../../Redux/store";

export const MyPostsContainer = () => {

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

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator(store._state.profilePage.newPostText))
                }

                let onPostChange = (text: string) => {
                    store.dispatch(updatePostTextActionCreator(text))
                }

                return <MyPosts store={store} addPost={addPost} onPostChange={onPostChange}/>
            }
            }
        </StoreContext.Consumer>
    )
}