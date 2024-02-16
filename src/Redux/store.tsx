import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

// export type StoreType = {
//     _state: StateType
    // _onChange: (state: StateType) => void
    // subscribe: (callback: (state: StateType) => void) => void
    // getState: () => StateType
    // dispatch: (action: any) => void
// }
//
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
// //
// export type ProfilePageType = {
//     posts: Array<PostsType>
//     newPostText: string
// }
//
// export type DialogsPageType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
//     newMessageText: string
// }
// //
// export type PostsType = {
//     id: number
//     message: string
//     likes: number
// }
//
// export type DialogsType = {
//     id: number
//     name: string
// }
//
// export type MessagesType = {
//     id: number
//     message: string
// }
//
// type UsersPageType = {
//     "name": string,
//     "id": number,
//     "photos": {
//         "small": string,
//         "large": string
//     },
//     "status": boolean,
//     "followed": false
// }
//
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, whats up!?", likes: 27},
//                 {id: 2, message: "It's my first post...", likes: 72}
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Daniil"},
//                 {id: 2, name: "Ksenia"},
//                 {id: 3, name: "Mom"},
//                 {id: 4, name: "Dad"},
//                 {id: 5, name: "Kirill"},
//                 {id: 6, name: "Ruslan"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "How are you?"},
//             ],
//             newMessageText: ""
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _onChange() {
//         console.log('state changed')
//     },
//     subscribe(callback) {
//         this._onChange = callback
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//
//         this._onChange(this._state)
//     }
// }
//
// export default store

