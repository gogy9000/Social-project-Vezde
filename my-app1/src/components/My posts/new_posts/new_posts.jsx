import React from 'react';
import s from './new_posts.module.css';



const New_posts = (props) => {
    
    let New_Post_element = React.createRef ()

    let onAddPost = () => {
        props.AddPost ();
       
        
    }
    let On_Post_Change = () => {
        
        let text = New_Post_element.current.value
        props.updateNewPostText(text);

       

    }
    return (
        <div className= {s.new_posts}>
            <div>Мой пост:</div>
            <div>
              <textarea onChange={On_Post_Change} ref={New_Post_element} value={props.New_Post_Text}/>
            </div>
            <button onClick={onAddPost}>нахуярить пост</button>
        </div>
    
        
    );
}
export default New_posts;