import React from 'react';
import New_posts from './new_posts/new_posts';
import Post1 from '../Posts/Post1/Posts1';
import My_post from './My post/My_post';


const Posts = (props) => {
  
  
  return (
   <div>
  
     <New_posts /*Post_item_data={props.Post_item_data}*/ Profile_Page={props.Profile_Page} AddPost={props.AddPost} updateNewPostText={props.updateNewPostText} /*New_Post_Text={props.Profile_Page.New_Post_Text}*/ /> 
     <My_post />
     <Post1 /*Post_item_data={props.Post_item_data} */Profile_Page={props.Profile_Page} AddPost={props.AddPost}  />       
     

   </div>
    );
}
export default Posts;