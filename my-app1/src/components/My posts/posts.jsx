import React from 'react';
import New_posts from './new_posts/new_posts';
import Post1 from '../Posts/Post1/Posts1';
import Post2 from '../Posts/Posts2/Post2';
import My_post from './My post/My_post';

const Posts = () => {
  return (
   <div>
    <p>
        <New_posts /> 
   </p>  
     <My_post />
     <Post1 message ="hii!" Like="5"  />       
     <Post1 message="it's my first post" Like="9897" />
     <Post1 message="fack you!" Like="333" />

   </div>
    );
}
export default Posts;