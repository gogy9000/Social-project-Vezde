import { usersAPI } from "../API/API";
import { updateObjectInArray } from "../utils/object-helpers";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_IS_FOLLOWING_PROGRESS'
type usersType = {

    items: [
        {
            name: string | null
            id: number | null
            photos: {
                small: string | null,
                large: string | null
            },
            status: string | null,
            followed: boolean
        }

    ],
    totalCount: number
    error: string | null
}



let initialsState = {

    users: [] as Array<usersType>,
    pageSize: 100 as number,
    totalUsersCount: 10 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>


}
type initialsStateType = typeof initialsState


const usersReducer = (state = initialsState, action: any): initialsStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        }

        default:
            return state;

    }

}
type followSuccessActionCreator = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): followSuccessActionCreator => ({ type: FOLLOW, userId })
type unfollowSuccessActionCreator = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessActionCreator => ({ type: UNFOLLOW, userId })
type setUsersActionCreator = {
    type: typeof SET_USERS
    users: usersType
}
export const setUsers = (users: usersType): setUsersActionCreator => ({ type: SET_USERS, users })
type setCurrentPageActionCreator = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionCreator => ({ type: SET_CURRENT_PAGE, currentPage })
type setTotalUsersCountActionCreator = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionCreator => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
type toggleIsFetchingActionCreator = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionCreator => ({ type: TOGGLE_IS_FETCHING, isFetching })
type toggleFollowingProgressActionCreator = {
    type: typeof TOGGLE_IS_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionCreator => ({ type: TOGGLE_IS_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page: number, pageSize: number) => {
    async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))


        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))


    }
}
export const follow = (userId: number) => {
    async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId)

        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))

    }
}
export const unfollow = (userId: number) => {
    async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.unfollow(userId)

        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))

    }
}


export default usersReducer