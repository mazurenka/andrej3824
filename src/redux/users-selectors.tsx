import {RootStateType} from "./store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,(users) => {
    return users
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}



