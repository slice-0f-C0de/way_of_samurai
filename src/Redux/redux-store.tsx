import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers)