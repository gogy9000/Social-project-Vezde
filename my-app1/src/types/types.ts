
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: any
    photos: PhotosType
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PostType = {
    id: number
    postItem: string
    likesCount: number
    photos: any

}
export type ProfilePageType = {

    postItemData: Array<PostType>,
    profile: ProfileType | null,
    status: string,
    weather: any,
    newPostText: string,
}



export type AuthType = {



    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
    captchaUrl: string | null


}

