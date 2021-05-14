import React from 'react'


export const getUsers  = (state) => {
    return state.Users_Page.users
}

export const getPageSizes  = (state) => {
    return state.Users_Page.pageSize
}
export const getTotalUsersCount  = (state) => {
    return state.Users_Page.totalUsersCount
}
export const getCurrentPage  = (state) => {
    return state.Users_Page.currentPage
}
export const getIsFetching  = (state) => {
    return state.Users_Page.isFetching
}
export const getFollowingInProgress  = (state) => {
    return state.Users_Page.followingInProgress
}
