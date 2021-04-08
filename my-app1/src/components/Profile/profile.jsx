import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Posts from '../My posts/posts';
import s from './profile.module.css';
import Description from '../description/description';
import Panorama from './Panorama/Panorama';
import {NavLink} from 'react-router-dom';

class ProfileContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className={s.Profile}>
                <Panorama/>
                <NavLink to="/Description">
                    <Description {...this.props} profile={this.props.profile}/>
                </NavLink>

                <Posts/>

            </div>

        );
    }


}
let mapStateToProps =(state) => ({
    profile: state.Profile_Page.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);