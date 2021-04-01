import React from 'react';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import {connect} from 'react-redux'
import New_posts from './new_posts';


/*const New_posts_containe = () => {
    
    return(
    <storeContext.Consumer>
        {
    (store) => {
    
      let state = store.getState();
      let AddPost = () => {
        //props.AddPost ();
        store.dispatch( AddPostActionCreator() );
        
    }
        let On_Post_Change = (text) => {
        
        //let text = New_Post_element.current.value
        //props.updateNewPostText(text);

        //let action= {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action= updateNewPostTextActionCreator (text)
        store.dispatch(action);

    }
    return <New_posts updateNewPostText={On_Post_Change}
                      AddPost={AddPost}
                      Post_item_data={state.Profile_Page.Post_item_data}
                      New_Post_Text={state.Profile_Page.New_Post_Text} />
           }
      }
    </storeContext.Consumer>
    )
    }*/
 let mapStateToProps = (state) => {
     //debugger
     return {
        Post_item_data: state.Profile_Page.Profile_Page.Post_item_data,
        New_Post_Text: state.Profile_Page.Profile_Page.New_Post_Text  
     }
 }
 let mapDispatchToProps = (dispatch) => {
    debugger
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