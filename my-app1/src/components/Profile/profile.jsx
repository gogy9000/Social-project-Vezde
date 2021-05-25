import React from 'react';
import { connect } from "react-redux";
import {
    getStatus,
    getUserProfile,
    AddPost,
    updateStatus,
    savePhoto
} from "../../redux/profile-reducer";
import s from './profile.module.css';
import Description from '../description/description';
import { withRouter } from 'react-router-dom';
import New_posts from "../My posts/new_posts/new_posts";
import My_post from "../My posts/My post/My_post";
import { compose } from "redux";




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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
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
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />


                <New_posts {...this.props} />
                <My_post />




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
    isAuth: state.isAuth

})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, AddPost, savePhoto }),
    withRouter,
)(ProfileContainer)










