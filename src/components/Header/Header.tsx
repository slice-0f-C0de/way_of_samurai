import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: null
    isAuth: boolean
}

export const Header = (props: HeaderType) => {
    console.log(props)
    return <header className={c.header}>
        <img src="https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/76bbd129-449c-4a03-8d58-5745d62481fd_rw_1920.jpg?h=2ed5eee0746d052074145d443aaee680"/>
        <div className={c.loginBlock}>
            {props.login ? props.isAuth : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}