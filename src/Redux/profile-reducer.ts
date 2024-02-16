type ProfileActionsType = AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileActionType

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: any
}

export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: {
        photos: {
            small: any
            large: any
        }
    }
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, whats up!?", likes: 27},
        {id: 2, message: "It's my first post...", likes: 72}
    ],
    newPostText: "",
    profile: {
        photos: {
            small: 'https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/925e784a-4b99-48cb-b2fa-30f530542b59.jpg?h=92aa6fa3c0fb06bb1b75121282852821',
            large: ''
        }
    }
}

type PostsType = {
    id: number,
    message: string,
    likes: number
}

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const updatePostTextActionCreator = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
}

export const setUserProfileActionCreator = (profile: any) => {
    return {type: 'SET-USER-PROFILE', profile: profile} as const
}