import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

let mapStatePropsToRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props) {
                return <Redirect to={'/login'}></Redirect>
            }

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStatePropsToRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

};

export default withAuthRedirect;