import React from 'react';
import s from './new_posts.module.css';

const New_posts = (props) => {
    //debugger
    let New_Post_element = React.createRef ()

    let AddPost = () => {
        
        let text = New_Post_element.current.value;
        props.AddPost (text);
    }
    return (
        <div className= {s.new_posts}>
            <div>
              <textarea ref={New_Post_element}></textarea>
            </div>
            <button onClick={AddPost}>нахуярить пост</button>
        </div>
    
        
    );
}
export default New_posts;