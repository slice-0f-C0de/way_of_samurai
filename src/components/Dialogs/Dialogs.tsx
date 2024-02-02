import React, {ChangeEvent} from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {StoreType} from "../../Redux/store";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";

type PropsType = {
    store: StoreType
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    let messagesElements = props.store._state.dialogsPage.messages.map(message => <Message message={message.message} />)
    let newMessageText = props.store._state.dialogsPage.newMessageText

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.store.dispatch(updateMessageTextActionCreator(text))
    }

    return <div className={c.dialogs}>
       <div className={c.dialogsItems}>
               {dialogsElements}
       </div>
           <div className={c.messages}>
               {messagesElements}
               <div>
                   <div><textarea value={newMessageText} onChange={onChangeTextMessage}></textarea></div>
                   <div><button onClick={onSendMessageClick}>send</button></div>
               </div>
       </div>
    </div>
}

export default Dialogs;