import {ActionsType} from "./store";

export type UsersPageType = {
    "name": string,
    "id": number,
    "photos": {
        "small": string,
        "large": string
    },
    "status": boolean,
    "followed": false
}

export type InitialStateType = {
    users: UsersPageType[]
}

let initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, status: true}
                }
                return u
            })}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, status: false}
                    }
                    return u
                })}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followUserActionCreator = (userID: number) => {
    return {type: 'FOLLOW', userID} as const
}

export const unfollowUserActionCreator = (userID: number) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersActionCreator = (users: UsersPageType[]) => {
    return {type: 'SET-USERS', users} as const
}