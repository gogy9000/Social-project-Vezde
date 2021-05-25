import React from 'react';
import s from './description.module.css' ;
import Preloader from "../Preloader/Preloader";
//import ProfileStatus from './../Profile/ProfileStatus'
import ProfileStatusWithHooks from '../Profile/ProfileStatusWithHooks';
import userPhoto from '../../assets/images/User.png'

const Description = ({status,updateStatus,profile,savePhoto,isOwner}) => {

    if (!profile){
        return <Preloader />
    }

    const onMainPhotoSelected =(e)=>{
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        < div className={s.Description}>
           <p>
               <img src ={profile.photos.large || userPhoto}/>
          </p>
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div>Ник: {profile.fullName}</div>
            <div>Статус: {profile.aboutMe}</div>
            <div>Место службы: {profile.lookingForAJobDescription}</div>




        </div>   
    );
}
export default Description;