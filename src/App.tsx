import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsType, StateType, StoreType} from "./Redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type PropsType = {
    store: StoreType
    newPostText: string
    dispatch: (action: ActionsType) => void
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
                               dispatch={props.dispatch}/>}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               store={props.store}
                               state={state}
                               dialogs={props.store._state.dialogsPage.dialogs}
                               messages={props.store._state.dialogsPage.messages}/>}/>
                    <Route path={"/sidebar"}
                           render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
