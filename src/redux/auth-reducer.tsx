import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

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

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: null | number,
                                email: null | string,
                                login: null | string,
                                isAuth: boolean
) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: symbol, password: symbol, rememberMe: boolean) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
    }
}

export default authReducer;