import React from "react";
import c from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogPropsType) => {

    let path = "/dialogs/" + props.id

    return <div className={c.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;