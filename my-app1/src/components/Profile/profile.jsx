import React from 'react';
import Posts from '../My posts/posts';
import s from './profile.module.css';
import Description from '../description/description';
import Panorama from './Panorama/Panorama';
import { NavLink } from 'react-router-dom';

const Profile = (props) => {
  
    return (
        <div className={s.Profile}>
          <Panorama />
          <NavLink to = "/Description"> 
            <Description name ="Vania G." age ="30" male ="man" />
          </NavLink>
         
          <Posts Post_item_data={props.Post_item_data} />
        </div>
        
    );
}
export default Profile;