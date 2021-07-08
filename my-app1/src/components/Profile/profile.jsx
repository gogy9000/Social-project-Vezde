import React from 'react';
import { connect } from "react-redux";
import {
    getStatus,
    getUserProfile,
    setPost,
    updateStatus,
    savePhoto,
    saveProfile,
    setUserProfile,

} from "../../redux/profile-reducer";
import s from './profile.module.css';
import Description from '../description/description';
import { withRouter } from 'react-router-dom';
import NewPosts from "../My posts/new_posts/new_posts";
import MyPost from "../My posts/My post/My_post";
import { compose } from "redux";

import Post1 from '../Posts/Post1/Posts1';
import axios from 'axios';




class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {

                this.props.history.push('/Login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }


    componentDidMount() {

        this.refreshProfile()


    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }







    render() {

        return <>

            <div className={s.Profile}>

                <Description {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}

                />

                <NewPosts {...this.props} />
                <MyPost profile={this.props.profile} />
                < Post1 {...this.props}
                    Profile_Page={this.props.Profile_Page}
                    profile={this.props.profile} />




            </div>
        </>
            ;
    }


}

let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Profile_Page: state.Profile_Page,
    New_Post_Text: state.Profile_Page.New_Post_Text,
    status: state.Profile_Page.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.isAuth,




})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, setPost, savePhoto, saveProfile, setUserProfile, }),
    withRouter,
)(ProfileContainer)










