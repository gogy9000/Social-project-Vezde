import React, { useState } from 'react';
import s from './description.module.css';
import Preloader from "../Preloader/Preloader";
import ProfileStatusWithHooks from '../Profile/ProfileStatusWithHooks';
import userPhoto from '../../assets/images/User.png'

import ProfileDataForm from '../Profile/ProfileDataForm'

const Description = ({ status, updateStatus, profile, savePhoto, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)
    const [editPhoto, setEditPhoto] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
            setEditPhoto(false)
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }


    return (
        < div className={s.Description}>
            <p>
                {editPhoto ? isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> : <img src={profile.photos.large || userPhoto} onClick={() => { setEditPhoto(true) }} />}
            </p>


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        </div>
    );


}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return isOwner && <div onClick={goToEditMode}>

        <div>Ник: {profile.fullName}</div>
        <div>Статус: {profile.aboutMe}</div>
        <div>Место службы: {profile.lookingForAJobDescription}</div>
        <div>aboutMe :{profile.aboutMe ? 'Yes' : 'No'}</div>

        <div><b>Contact </b>:{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}</div>
    </div>

}





const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
export default Description;