const ADD_PHOTO = 'ADD_PHOTO'

const initialsState = {
    photosData: [
        { id: null, photo: null }
    ]
}


const photosReducer = (state = initialsState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            let newPhoto = {
                id: Math.random(),
                photo: action.photo
            }
            return {
                ...state, photosData: [...state.photosData, newPhoto]
            }
        default:
            return state
    }
}

export const addPhoto = (photo) => ({ type: ADD_PHOTO, photo })

export default photosReducer