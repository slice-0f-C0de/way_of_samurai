import React, {useRef} from "react";
import c from "./../Dialogs.module.css"

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return <div className={c.message}>{props.message}
    </div>
}

export default Message;