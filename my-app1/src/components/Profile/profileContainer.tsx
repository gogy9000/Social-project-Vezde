import React from 'react';
import { connect, DefaultRootState } from "react-redux";
import {
    getStatus,
    getUserProfile,
    setPost,
    updateStatus,
    savePhoto,
    saveProfile,
    setUserProfile
} from "../../redux/profile-reducer";
import s from './profile.module.css';
import Description from '../description/description';
import { withRouter } from 'react-router-dom';
import NewPosts from "../My posts/new_posts/new_posts";
import MyPost from "../My posts/My post/My_post";
import { compose } from "redux";
import Posts from '../Posts/Posts/Posts';
import { AuthType, ProfilePageType, ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store'

type MapStateToPropsType = {

    profilePage: ProfilePageType

    auth: AuthType




}
type MapDispatchToProps = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    setPost: (newPostText: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
    setUserProfile: (profile: ProfileType) => void
    updateStatus: (status: string) => void

}
type OwnProps = {
    match: any
    history: any
    prevProps: any
}

type PropsType = MapStateToPropsType & MapDispatchToProps & OwnProps

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {

            userId = this.props.auth.userId
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

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }







    render() {

        return <>

            <div className={s.Profile}>

                <Description {...this.props}
                    profile={this.props.profilePage.profile}
                    status={this.props.profilePage.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}

                />

                <NewPosts {...this.props} />

                < Posts profilePage={this.props.profilePage}


                />




            </div>
        </>
            ;
    }


}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth,
    profilePage: state.profilePage,










})

export default compose(
    connect<MapStateToPropsType, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus,
            setPost,
            savePhoto,
            saveProfile,
            setUserProfile,
        }),
    withRouter,
)(ProfileContainer)










