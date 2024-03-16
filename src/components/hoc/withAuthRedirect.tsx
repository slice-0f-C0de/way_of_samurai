import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStatePropsToRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStatePropsType) => {
            if (!props.isAuth) {
                return <Redirect to={'/login'}></Redirect>
            }

            return <Component {...props} />
        }

    let ConnectedAuthRedirectComponent = connect(mapStatePropsToRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

};

export default withAuthRedirect;