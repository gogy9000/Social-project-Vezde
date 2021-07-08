const ADD_PHOTO = 'ADD_PHOTO'





type photosDataType = {
    id: number | null
    photo: any | null
}



const initialsState = {
    photosData:
        [
            { id: null, photo: null }
        ] as Array<photosDataType>


}

export type InitialStateType = typeof initialsState

const photosReducer = (state = initialsState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_PHOTO:
            let newPhoto = {
                id: +Math.random(),
                photo: action.photo
            }
            return {
                ...state, photosData: [...state.photosData, newPhoto]
            }
        default:
            return state
    }
}
type addPhotoActionCreator = {
    type: typeof ADD_PHOTO
    photo: any
}
export const addPhoto = (photo: any): addPhotoActionCreator => ({ type: ADD_PHOTO, photo })

export default photosReducer