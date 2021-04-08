import React from 'react';
import s from './description.module.css' ;
import Preloader from "../Preloader/Preloader";

const Description = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        < div className={s.Description}>
           <p>
               <img src ={props.profile.photos.large}/>
          </p>
        </div>   
    );
}
export default Description;