import { UserType } from './../types/types';
import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"


const getUsersSelector = (state: AppStateType) => {
    return state.Users_Page.users
}


export const getUsers = createSelector(getUsersSelector, (users) => {

    return users.filter(u => true)
})

export const getPageSizes = (state: AppStateType) => {
    return state.Users_Page.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.Users_Page.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.Users_Page.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.Users_Page.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.Users_Page.followingInProgress
}
export const getPortionSize = (state: AppStateType) => {
    return state.Users_Page.portionSize
}


