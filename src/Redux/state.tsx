export type StoreType = {
    _state: StateType
    _onChange: () => void
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
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
    addPost(postText: string) {
        let newPost: PostsType = {
            id: 5,
            message: postText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    subscribe(callback) {
        this._onChange = callback
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
