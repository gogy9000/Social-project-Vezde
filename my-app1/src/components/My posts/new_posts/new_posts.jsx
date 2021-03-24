import React from 'react';
import s from './new_posts.module.css';

const New_posts = (props) => {
    
    let New_Post_element = React.createRef ()

    let AddPost = () => {
        props.dispatch({type: 'ADD-POST'});
        
    }
    let On_Post_Change = () => {
        debugger
        let text = New_Post_element.current.value
        let action= {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }
    return (
        <div className= {s.new_posts}>
            <div>
              <textarea onChange={On_Post_Change} ref={New_Post_element} value={props.New_Post_Text}/>
            </div>
            <button onClick={AddPost}>нахуярить пост</button>
        </div>
    
        
    );
}
export default New_posts;