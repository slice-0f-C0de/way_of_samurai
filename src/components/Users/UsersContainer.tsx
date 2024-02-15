import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followUserActionCreator, InitialStateType, setCurrentPageActionCreator,
    setUsersActionCreator,
    unfollowUserActionCreator, UsersPageType
} from "../../Redux/users-reducer";
import UsersClass from "./Users";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    users: InitialStateType,
    pageSize: number,
    usersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersPageType[]) => void
    setCurrentPage: (pageNumber: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClass)

export default UsersContainer