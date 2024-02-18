type UsersActionsType = followUserActionType
    | unfollowUserActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType

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

export type UsersPageType = {
    "name": string,
    "id": number,
    "photos": {
        "small": string,
        "large": string
    },
    "status": boolean,
    "followed": false,
}

export type InitialStateType = {
    users: UsersPageType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, status: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, status: false}
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
        default:
            return state
    }
}

export const follow = (userID: number) => {
    return {type: 'FOLLOW', userID} as const
}

export const unfollow = (userID: number) => {
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
