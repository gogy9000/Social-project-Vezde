import React from 'react';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import {connect} from 'react-redux'
import New_posts from './new_posts';



 const mapStateToProps = (state) => {

     return {
        Post_item_data: state.Profile_Page.Post_item_data,
        New_Post_Text: state.Profile_Page.New_Post_Text  
     }
 }
 const mapDispatchToProps = (dispatch) => {

     return {

        updateNewPostText: (text) => {
            let action= updateNewPostTextActionCreator (text)
            dispatch(action) 
        },
        AddPost: () => {
            dispatch(AddPostActionCreator())
        } 
     }
 }


const New_posts_container = connect (mapStateToProps,mapDispatchToProps)(New_posts)
       
    
        
    

export default New_posts_container;