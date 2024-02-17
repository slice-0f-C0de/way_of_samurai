type DataActionsType = setAuthUserDataActionType

export type setAuthUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        userID: null
        email: null
        login: null
    }
}

export type InitialStateType = {
    id: null
    email: null
    login: null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: DataActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}