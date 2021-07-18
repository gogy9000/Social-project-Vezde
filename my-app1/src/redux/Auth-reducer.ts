import { authAPI, securityAPI } from "../API/API";
import { stopSubmit } from "redux-form";
import { AuthType } from "../types/types";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialsState: AuthType = {


    userId: null, email: null, login: null, isAuth: false, captchaUrl: null

}

type initialsStateType = typeof initialsState

const authReducer = (state = initialsState, action: any): initialsStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
type setAuthUserDataActionCreator = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionCreator => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
type getCaptchaUrlSuccessActionCreator = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: any
    }
}
export const getCaptchaUrlSuccess = (captchaUrl: any): getCaptchaUrlSuccessActionCreator => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let { id, email, login, } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    } else {
        dispatch(stopSubmit('some error', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {

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

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }


}


export default authReducer