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

        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>{pages.map(p => {
                return <span className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
            })}</div>
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