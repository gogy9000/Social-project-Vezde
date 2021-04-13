import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {AddPost, setUserProfile, updateNewPostText} from "../../redux/profile-reducer";
//import Posts from '../My posts/posts';
import s from './profile.module.css';
import Description from '../description/description';
//import Panorama from './Panorama/Panorama';
import {NavLink} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import New_posts from "../My posts/new_posts/new_posts";
import My_post from "../My posts/My post/My_post";
//import Post1Container from "../Posts/Post1/Posts1-container";
import Post1 from "../Posts/Post1/Posts1";
import Preloader from "../Preloader/Preloader";


class ProfileContainer extends React.Component {


    componentDidMount() {
        debugger
        let  userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
            
                
                
               
    }
    

    render() {

        return <>

            <div className={s.Profile}>
                <NavLink to="/Description">
                    <Description {...this.props} />
                </NavLink>

                <New_posts {...this.props}   />
                <My_post />

                
                

            </div>
</>
        ;
    }


}

let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Profile_Page: state.Profile_Page,
    New_Post_Text: state.Profile_Page.New_Post_Text
})

let WithUrlDataContainerComponent= withRouter (ProfileContainer)

export default connect(mapStateToProps, {setUserProfile,AddPost,updateNewPostText})(WithUrlDataContainerComponent);