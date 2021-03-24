import React from 'react';
import New_posts from './new_posts/new_posts';
import Post1 from '../Posts/Post1/Posts1';
import My_post from './My post/My_post';


const Posts = (props) => {
  
  
  return (
   <div>
  
     <New_posts  Profile_Page={props.Profile_Page} dispatch={props.dispatch} New_Post_Text={props.Profile_Page.New_Post_Text} /> 
     <My_post />
     <Post1 Profile_Page={props.Profile_Page} dispatch={props.dispatch}  />       
     

   </div>
    );
}
export default Posts;