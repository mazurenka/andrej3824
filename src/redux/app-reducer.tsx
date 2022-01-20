import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

export type usersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: Array<locationType>
}

type locationType = {
    city: string
    country: string
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData())

    dispatch(initializedSuccess())
}

export default appReducer;



















