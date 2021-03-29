import React from 'react';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import New_posts from './new_posts';


const New_posts_container = (props) => {
    let state = props.store.getState();

    

    let AddPost = () => {
        //props.AddPost ();
        props.store.dispatch( AddPostActionCreator() );
        
    }
    let On_Post_Change = (text) => {
        
        //let text = New_Post_element.current.value
        //props.updateNewPostText(text);

        //let action= {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action= updateNewPostTextActionCreator (text)
        props.store.dispatch(action);

    }
    return <New_posts updateNewPostText={On_Post_Change}
     AddPost={AddPost}
     Post_item_data={state.Profile_Page.Post_item_data}
     New_Post_Text={state.Profile_Page.New_Post_Text} />
       
    
        
    
}
export default New_posts_container;