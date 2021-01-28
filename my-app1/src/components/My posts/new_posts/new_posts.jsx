import React from 'react';
import s from './new_posts.module.css';

const New_posts = () => {
    return (
        <div className= {s.new_posts}>
            <div>
              <textarea>New post:</textarea>
            </div>
            <button>send</button>
        </div>
    
        
    );
}
export default New_posts;