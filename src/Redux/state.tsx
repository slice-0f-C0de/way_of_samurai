export type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | UpdateNewPostActionType

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, whats up!?", likes: 27},
                {id: 2, message: "It's my first post...", likes: 72}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                message: action.postText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    }
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type PostsType = {
    id: number
    message: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export default store
