import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./Redux/store";
import Sidebar from "./components/Sidebar/Sidebar";

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile
                           />}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs
                               store={props.store}
                           />}/>
                    <Route path={"/sidebar"}
                           render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
