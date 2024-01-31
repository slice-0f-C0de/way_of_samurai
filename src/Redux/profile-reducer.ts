import {ActionsType, PostsType} from "./store";

let initialState = {
        posts: [
            {id: 1, message: "Hi, whats up!?", likes: 27},
            {id: 2, message: "It's my first post...", likes: 72}
        ],
        newPostText: ""
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: action.postText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => {
    return {type: 'ADD-POST', postText: postText} as const
}

export const updatePostTextActionCreator = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
}