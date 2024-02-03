import React from "react";
import {StoreType} from "../../Redux/store";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let SendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let ChangeTextMessage = (text: string) => {
                    store.dispatch(updateMessageTextActionCreator(text))
                }

                return <Dialogs store={store} SendMessageClick={SendMessageClick}
                                ChangeTextMessage={ChangeTextMessage}/>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;