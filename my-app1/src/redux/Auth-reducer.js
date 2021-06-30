import { authAPI, securityAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialsState = {

    loginData: [
        { userId: null },
        { email: null },
        { login: null },
        { isAuth: false },
        { captchaUrl: null } //if null, then captcha is not required
    ]

}

const authReducer = (state = initialsState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login, } = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            } else {
                dispatch(stopSubmit('some error', { _error: response.data.messages[0] }))
                return Promise.reject(response.data.messages[0])
            }
        })


}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        let { id, email, login, } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.lenght > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', { _error: message }));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}


export default authReducer