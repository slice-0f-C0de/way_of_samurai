import {usersAPI} from "../api";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

type UsersActionsType = followUserActionType
    | unfollowUserActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | toggleIsFollowingProgressActionType

export type followUserActionType = {
    type: 'FOLLOW'
    userID: number
}

export type unfollowUserActionType = {
    type: 'UNFOLLOW'
    userID: number
}

export type setUsersActionType = {
    type: 'SET-USERS'
    users: UsersPageType[]
}

export type setCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type setTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    count: number
}

export type toggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type toggleIsFollowingProgressActionType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: number
}

export type UsersPageType = {
    "name": string,
    "id": number,
    "photos": {
        "small": string,
        "large": string
    },
    "status": boolean,
    "followed": boolean,
}

export type InitialStateType = {
    users: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)}
        default:
            return state
    }
}

export const followSaccess = (userID: number) => {
    return {type: 'FOLLOW', userID} as const
}

export const unfollowSaccess = (userID: number) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsers = (users: UsersPageType[]) => {
    return {type: 'SET-USERS', users} as const
}

export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}

export const setTotalUsersCount = (count: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', count} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const
}

export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSaccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSaccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
