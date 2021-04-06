import React from 'react';
import New_posts from './new_posts/new_posts';
import Post1 from '../Posts/Post1/Posts1';
import My_post from './My post/My_post';
import New_posts_container from './new_posts/new_posts_container';
import Post1Container from './../Posts/Post1/Posts1-container'

const Posts = () => {
  
  
  return (
   <div>
  
     <New_posts_container  /> 
     <My_post />
     <Post1Container   />       
     

   </div>
    );
}
export default Posts;