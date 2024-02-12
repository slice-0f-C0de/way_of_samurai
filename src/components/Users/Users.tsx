import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    debugger

    if (props.users.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatar: 'https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/842a5a99569d31fab757c880.jpg?h=0764fe652a37cd93dc242505e2a4c392',
                name: 'Daniil',
                surname: 'Ryabokon',
                location: {country: 'Russia', city: 'Astrakhan'},
                status: true
            },
            {
                id: 2,
                avatar: 'https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/842a5a99569d31fab757c880.jpg?h=0764fe652a37cd93dc242505e2a4c392',
                name: 'Ksenia',
                surname: 'Kozlova',
                location: {country: 'Russia', city: 'Astrakhan'},
                status: false
            },
        ])
    }

    return <div>
        {props.users.users.map(u => <div key={u.id}>
            <span>
                <div>{u.name} {u.surname}</div>
                <div>{u.status}</div>
                <div>{u.location.country}, {u.location.city}</div>
                <div><img src={u.avatar} className={styles.avatar}/></div>
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