import { ChangeEvent, FC, useState } from 'react';
import s from './description.module.css';
import Preloader from "../Preloader/Preloader";
import ProfileStatusWithHooks from '../Profile/ProfileStatusWithHooks';
import userPhoto from '../../assets/images/User.png'

import ProfileDataForm from '../Profile/ProfileDataForm'
import { ProfileType } from '../../types/types';

type DescriptionPropsType = {
    status: string | null
    updateStatus: (status: string) => void
    profile: ProfileType | null
    savePhoto: (file: any) => void
    isOwner: boolean
    saveProfile: (formData: any) => any


}

const Description: FC<DescriptionPropsType> = ({ status, updateStatus, profile, savePhoto, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)
    const [editPhoto, setEditPhoto] = useState(false)

    if (!profile) {
        return <Preloader />
    }
    const onSubmit = (formData: any) => {
        saveProfile(formData)
            (
                () => {
                    setEditMode(false);
                }
            )
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
            setEditPhoto(false)
        }
    }




    return (
        < div className={s.Description}>
            <p>
                {editPhoto ? isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> : <img src={profile.photos.large || userPhoto} onClick={() => { setEditPhoto(true) }} />}
            </p>


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            {editMode
                ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        </div>
    );


}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
// @ts-ignore
const ProfileData: FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
    return isOwner && <div onClick={goToEditMode}>

        <div>Ник: {profile.fullName}</div>

        <div>Место службы: {profile.lookingForAJobDescription}</div>
        <div>aboutMe :{profile.aboutMe ? 'Yes' : 'No'}</div>

        <div><b>Contact </b>:{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}</div>
    </div>

}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}



const Contact: FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
export default Description;