import React from 'react';
import New_posts from './new_posts/new_posts';
import Post1 from '../Posts/Posts/Posts';
import My_post from './My post/My_post';
import New_posts_container from './new_posts/new_posts_container';
import Post1Container from '../Posts/Posts/PostsContainer'

const Posts = (props) => {


  return (
    <div>

      <New_posts_container />
      <My_post />
      <Post1Container />


    </div>
  );
}
export default Posts;