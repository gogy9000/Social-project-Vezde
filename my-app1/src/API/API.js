import * as axios from "axios";

 const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
         "API-KEY": '9998b652-b16b-4b0d-b784-98bbaf34a6e7'
     }
 });

 export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 100) {
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
         return  instance.get(`profile/`+userId)
     },



 }
 export const authAPI = {
     me() {
         return  instance.get (`auth/me`)
     }
 }