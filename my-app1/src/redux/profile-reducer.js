import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../API/API";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialsState = {

    Post_item_data: [
        { id: 1, Post_item: 'Hello Motherfucker!', Like: 121, photos: null, },
        { id: 2, Post_item: 'Hello motherfucker!', Like: 123, photos: null, },
        { id: 3, Post_item: 'Hello motherfucker!', Like: 123, photos: null, },
    ],


    profile: null,
    status: ''
}


const profileReducer = (state = initialsState, action) => {

    switch (action.type) {

        case ADD_POST:
            let New_Post = {
                id: 5,
                Post_item: action.newPostText,
                Like: 0
            }
            return {
                ...state,
                Post_item_data: [...state.Post_item_data, New_Post],

            }


        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case DELETE_POST:
            return {...state, Post_item_data: state.Post_item_data.filter(p => p.id !== action.postId)}
        
            case SAVE_PHOTO_SUCCESS:
                return {...state, profile: {...state.profile, photos: action.photos}}

            default:
            return state;

    }

}

export const AddPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess =(photos) => ({type:SAVE_PHOTO_SUCCESS, photos})
export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)

        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)

        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {


                dispatch(setStatus(response.status))
            }
        }
        )

}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile)=> async (dispatch,getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    debugger
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer