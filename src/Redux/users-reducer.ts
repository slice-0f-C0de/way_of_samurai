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
    users: UsersPageType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
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

export const setCurrentPageActionCreator = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}

export const setTotalUsersCount = (count: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', count} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}