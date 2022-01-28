import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type SidebarType = {}

export type AppPropsType = {
    posts: Array<PostType>
    messages: DialogsPageType
    dialogs: DialogType
    profile: ProfilePageType
    likesCount: Array<PostType>
    id: number
    message: string

}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type AddPostType = {
    newPost: PostType
}
export type StoreType = {
    _state: _StateType
    _callSubscriber: () => void
    getState: () => void
    subscribe: (observer: any) => void
    dispatch: (action: string) => void
}

export type _StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: object
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'Hello', likesCount: 1},
                {id: 3, message: 'Yo', likesCount: 22},
                {id: 4, message: 'Yo', likesCount: 34},
                {id: 5, message: 'Yo', likesCount: 5},
                {id: 6, message: 'Yo', likesCount: 7}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: string) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.profilePage, action)
        this._callSubscriber(this._state)
    }
}


export default store
// @ts-ignore
window.store = store


