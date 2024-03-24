type DialogsActionsType = | UpdateNewMessageActionType
    | SendMessageActionType

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}

export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    text: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Daniil"},
        {id: 2, name: "Ksenia"},
        {id: 3, name: "Mom"},
        {id: 4, name: "Dad"},
        {id: 5, name: "Kirill"},
        {id: 6, name: "Ruslan"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
    ]
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.text}
        }
        case 'SEND-MESSAGE': {
            return {...state, messages: [...state.messages, {id: 3, message: action.newMessageText}]}
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText: string) => {
    return {type: 'SEND-MESSAGE', newMessageText} as const
}