type DataActionsType = setAuthUserDataActionType

export type setAuthUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        userID: string
        email: string
        login: string
    }
}

export type InitialStateType = {
    id: null
    email: string
    login: string
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: '',
    login: '',
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

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {type: 'SET-USER-DATA', data: {id, email, login}} as const
}
