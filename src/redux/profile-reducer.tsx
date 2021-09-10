import {PostType, RootStateType} from "./store";
import React from "react";
import {ProfilePropsType} from "../components/Profile/Profile";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'Hello', likesCount: 1},
        {id: 3, message: 'Yo', likesCount: 22},
        {id: 4, message: 'Yo', likesCount: 34},
        {id: 5, message: 'Yo', likesCount: 5},
        {id: 6, message: 'Yo', likesCount: 7}
    ],
    newPostText: 'it-kamasutra',
    profile: null
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile: React.FC<ProfilePropsType>) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId: number) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const updateNewPostActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;