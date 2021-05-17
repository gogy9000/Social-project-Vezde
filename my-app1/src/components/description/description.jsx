import React from 'react';
import s from './description.module.css' ;
import Preloader from "../Preloader/Preloader";
import ProfileStatus from './../Profile/ProfileStatus'
import ProfileStatusWithHooks from '../Profile/ProfileStatusWithHooks';

const Description = (props) => {

    if (!props.profile){
        return <Preloader />
    }
    return (
        < div className={s.Description}>
           <p>
               <img src ={props.profile.photos.large}/>
          </p>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            <div>Ник: {props.profile.fullName}</div>
            <div>Статус: {props.profile.aboutMe}</div>
            <div>Место службы: {props.profile.lookingForAJobDescription}</div>




        </div>   
    );
}
export default Description;