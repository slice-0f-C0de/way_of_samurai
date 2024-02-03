import React from "react";
import {StoreType} from "../../Redux/store";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    let SendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let ChangeTextMessage = (text: string) => {
            props.store.dispatch(updateMessageTextActionCreator(text))
    }

    return <Dialogs store={props.store} SendMessageClick={SendMessageClick} ChangeTextMessage={ChangeTextMessage}/>
}

export default DialogsContainer;