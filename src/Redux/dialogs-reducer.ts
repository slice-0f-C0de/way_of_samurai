import {ActionsType} from "./store";

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
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.text}
        }
        case 'SEND-MESSAGE': {
            return {...state, messages: [...state.messages, {id: 3, message: state.newMessageText}]}
        }
        default:
            return state
    }
}

export const updateMessageTextActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', text: text} as const
}

export const sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
}
