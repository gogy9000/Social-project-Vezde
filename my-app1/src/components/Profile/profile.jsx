import React from 'react';
import { connect } from "react-redux";
import { AddPost, getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import s from './profile.module.css';
import Description from '../description/description';
import { NavLink, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import New_posts from "../My posts/new_posts/new_posts";
import My_post from "../My posts/My post/My_post";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";




class ProfileContainer extends React.Component {


    componentDidMount() {
debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        setTimeout(() => {


            this.props.getStatus(userId)
        }, 1000)
    }







    render() {

        return <>

            <div className={s.Profile}>

                <Description {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />


                <New_posts {...this.props} />
                <My_post />




            </div>
        </>
            ;
    }


}
debugger
let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Profile_Page: state.Profile_Page,
    New_Post_Text: state.Profile_Page.New_Post_Text,
    status: state.Profile_Page.status,
    authorizedUserId: state.userId,
    isAuth: state.isAuth

})

export default compose(
    connect(mapStateToProps, { AddPost, getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect)(ProfileContainer)










