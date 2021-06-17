import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": '9998b652-b16b-4b0d-b784-98bbaf34a6e7'
    }
})

export const weatherAPI = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f785eebe449acd42f58fce044f67d7f2&lang=ru&units=metric`)
    .then(response => {
        return response
    })




export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        // console.warn('obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}




export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`, { email, password, rememberMe })
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

export const dialogsAPI = {

    getDialogs(userId) {

        return instance.get(`dialogs/${userId}`)
            .then(response => {

                console.log(response.data)

            })
    }
}
// export const radioAPI =
//     axios.get(`https://music.yandex.ru/api/audio/dist/index.js`)

// console.log(radioAPI)
