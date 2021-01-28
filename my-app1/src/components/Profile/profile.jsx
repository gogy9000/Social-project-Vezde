import React from 'react';
import Posts from '../My posts/posts';
import s from './profile.module.css';
import Description from '../description/description';
import Panorama from './Panorama/Panorama';

const Profile = () => {
    return (
        <div className={s.Profile}>
          <Panorama />
          <Description name ="Vania G." age ="30" male ="man" />
          <Posts />
        </div>
        
    );
}
export default Profile;