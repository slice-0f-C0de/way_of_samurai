import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type PropsType = {
    store: StoreType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    let message = state.profilePage.posts[0].message

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile
                               newPostText={props.store._state.profilePage.newPostText}
                               profilePage={props.store._state.profilePage.posts}
                               addPost={props.store.addPost.bind(props.store)}
                               updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               dialogs={props.store._state.dialogsPage.dialogs}
                               messages={props.store._state.dialogsPage.messages}/>}/>
                    <Route path={"/sidebar"}
                           render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
