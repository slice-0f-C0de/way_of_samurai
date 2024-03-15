import React, {ChangeEvent} from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    SendMessageClick: () => void
    ChangeTextMessage: (text: string) => void
    isAuth?: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)

    let onSendMessageClick = () => {
        props.SendMessageClick()
    }

    let onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.ChangeTextMessage(text)
    }

    // if (!props.isAuth) {
    //     return <Redirect to={'/login'}></Redirect>
    // }

    return <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
            <div>
                <div>
                    <textarea value={props.dialogsPage.newMessageText} onChange={onChangeTextMessage}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    </div>
}

export default Dialogs;