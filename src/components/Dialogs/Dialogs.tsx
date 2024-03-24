import React, {ChangeEvent} from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
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
    sendMessage: (values: any) => void
    ChangeTextMessage: (text: string) => void
    isAuth?: boolean
}

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'Enter your message'}></Field>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
}

export default Dialogs;