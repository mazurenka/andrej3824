import {getAuthUserData} from "./auth-reducer";

export type usersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: Array<locationType>
}

export type InitialStateType = {
    initialized: boolean,
}

type locationType = {
    city: string
    country: string
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;



















