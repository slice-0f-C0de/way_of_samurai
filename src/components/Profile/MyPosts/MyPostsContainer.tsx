import React, {ChangeEvent} from "react";
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

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