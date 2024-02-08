import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile />}/>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer />}/>
                    <Route path={"/sidebar"}
                           render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;
