import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={store.addPost} newPostText={store._state.profilePage.newPostText} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)