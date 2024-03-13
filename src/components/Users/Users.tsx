import React from 'react';
import styles from "./users.module.css";
import user from "./avatar/user.jpg";
import {InitialStateType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: InitialStateType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: any[]
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>{pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}</div>
            {props.users.users.map(u => <div key={u.id}>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.followed}</div>
                <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : user}
                         className={styles.avatar}/>
                </NavLink>
                </div>
            </span>
                <span>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                </div>
            </span>
            </div>)}
        </div>
    );
};

export default Users;