import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers, InitialStateType, setCurrentPage, toggleFollowingProgress, unfollow
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserProfile} from "../../Redux/profile-reducer";

type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
    isAuth: boolean
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: any
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers}))(UsersContainer)