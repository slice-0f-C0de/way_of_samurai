import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

type PropsType = {
    dialogs: DialogsDataProps[]
    messages: MessagesDataProps[]
}

export type DialogsDataProps = {
    id: number
    name: string
}

type MessagesDataProps = {
    id: number
    message: string
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <Message message={message.message} />)

    return <div className={c.dialogs}>
       <div className={c.dialogsItems}>
               {dialogsElements}
       </div>
           <div className={c.messages}>
               {messagesElements}
       </div>
    </div>
}

export default Dialogs;