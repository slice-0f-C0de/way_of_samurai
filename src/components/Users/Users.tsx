import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import user from './avatar/user.jpg'

const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                    props.setUsers(response.data.items)
                }
            )
        }
    }

    return <div>

        <button onClick={getUsers}>Get Users</button>

        {props.users.users.map(u => <div key={u.id}>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.followed}</div>
                <div><img src={u.photos.small !== null ? u.photos.small : user} className={styles.avatar}/></div>
            </span>
            <span>
                <div>
                    {u.status ? <button onClick={() => props.unfollow(u.id) }>unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>follow</button>}
                </div>
            </span>
        </div>)}
    </div>
};

export default Users;