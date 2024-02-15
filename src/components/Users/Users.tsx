import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import user from './avatar/user.jpg';

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return <div>

            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>

            {this.props.users.users.map(u => <div key={u.id}>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.followed}</div>
                <div><img src={u.photos.small !== null ? u.photos.small : user} className={styles.avatar}/></div>
            </span>
                <span>
                <div>
                    {u.status ? <button onClick={() => this.props.unfollow(u.id) }>unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)}>follow</button>}
                </div>
            </span>
            </div>)}
        </div>
    };
}

export default Users;