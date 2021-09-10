import {authAPI} from "../api/api";

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

const SET_USER_DATA = 'SET_USER_DATA';

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: null | number,
                                email: null | string,
                                login: null | string) => ({SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {Id, login, email} = response.data.data;
                dispatch(setAuthUserData(Id, email, login));
            }
        })
}

export default authReducer;