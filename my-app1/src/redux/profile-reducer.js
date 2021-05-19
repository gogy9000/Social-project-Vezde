import { profileAPI, usersAPI } from "../API/API";

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
            return {...state, Post_item_data: state.Post_item_data.filter(p => p.id != action.postId)}
        default:
            return state;

    }

}

export const AddPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const deletePost = (postId) => ({type: DELETE_POST, postId})

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


export default profileReducer