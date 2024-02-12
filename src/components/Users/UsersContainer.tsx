import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followUserActionCreator, InitialStateType,
    setUsersActionCreator,
    unfollowUserActionCreator, UsersPageType
} from "../../Redux/users-reducer";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    users: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersPageType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followUserActionCreator(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowUserActionCreator(userID))
        },
        setUsers: (users: UsersPageType[]) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer