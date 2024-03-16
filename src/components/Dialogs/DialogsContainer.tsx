import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        SendMessageClick: () => {
            dispatch(sendMessageActionCreator());
        },
        ChangeTextMessage: (text: string) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(DialogsContainer)