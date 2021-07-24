
export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    aboutMe: string | null
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
    small: any
    large: any
}
export type UserType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}
export type PostType = {
    id: number | null
    postItem: string | null
    likesCount: number | null
    photos: any | null

}
export type ProfilePageType = {

    postItemData: Array<PostType>,
    profile: ProfileType,
    status: string,
    weather: any,
    newPostText: string | null,
}



export type AuthType = {



    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: File | null


}

