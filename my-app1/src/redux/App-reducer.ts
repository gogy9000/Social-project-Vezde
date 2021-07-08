
import { getAuthUserData } from './Auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialsState = {

    initialized: true as boolean,


}
type initialsStateType = typeof initialsState

const AppReducer = (state = initialsState, action: any): initialsStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return { ...state, initialized: true }
        default:
            return state
    }
}
type initializedSuccessActionCreatorType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionCreatorType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())

        })
        // .catch(console.log('че за?'))
        .finally(() => dispatch(initializedSuccess))
}



export default AppReducer