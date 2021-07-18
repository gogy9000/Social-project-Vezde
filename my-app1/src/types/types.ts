
export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
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
    photos: PhotosType

}
export type ProfilePageType = {

    postItemData: Array<PostType>,
    profile: ProfileType | null,
    status: string | null,
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

