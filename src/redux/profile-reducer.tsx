import {PostType, RootStateType} from "./store";
import React from "react";
import {ProfilePropsType} from "../components/Profile/Profile";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello', likesCount: 11},
        {id: 3, message: 'Yo', likesCount: 22},
        {id: 4, message: 'Yo', likesCount: 34},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: React.FC<ProfilePropsType>) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string) => ({type: SET_STATUS, status})

export const getUserProfile = (userId: number) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: number) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer;




















