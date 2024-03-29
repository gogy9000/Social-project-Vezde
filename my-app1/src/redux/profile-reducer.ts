

import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI, weatherAPI } from "../API/API";
import { PhotosType, ProfileType, ProfilePageType, PostType } from "../types/types";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SET_WEATHER = 'SET_WEATHER'



let initialsState = {

    postItemData: [
        { id: 1, postItem: 'sdf', likesCount: 34, photos: null as any },

    ] as Array<PostType>,


    profile: null as ProfileType | null

    ,
    status: '',
    weather: null,
    newPostText: '',

}

export type initialsStateType = typeof initialsState


const profileReducer = (state = initialsState, action: any): initialsStateType => {

    switch (action.type) {

        case ADD_POST:
            let NewPost = {
                id: Math.random(),
                postItem: action.newPostText,
                likesCount: Math.random() * 100,

                photos: state.profile?.photos.small
            }
            debugger
            return {
                ...state,
                postItemData: [...state.postItemData, NewPost],
                newPostText: ''

            }


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_WEATHER: {
            return {
                ...state,
                weather: action.weather
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case DELETE_POST:
            return { ...state, postItemData: state.postItemData.filter(p => p.id !== action.id) }

        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

        default:
            return state;

    }

}
type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string

}

export const AddPost = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText })

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })
type setWeatherDataActionType = {
    type: typeof SET_WEATHER
    weather: any
}
export const setWeatherData = (weather: any): setWeatherDataActionType => ({ type: SET_WEATHER, weather })

export const setPost = (newPostText: string) => (dispatch: any) => {
    dispatch(AddPost(newPostText))
}


export const getWeatherData = (city: string) => async (dispatch: any) => {
    let response = await weatherAPI(city)
    if (response.statusText === "OK") {
        await dispatch(setWeatherData(response.data))
    }
    else {
        return Promise.reject(response.statusText[0])
    }
}



export const getUserProfile = (userId: number) => async (dispatch: any) => {



    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {


            dispatch(setStatus(status))
        }
    } catch (error) {

    }




}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
        return Promise.reject(response.data.messages[0])
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}



export default profileReducer