import React from 'react';
import s from './Posts1.module.css';

const Post1 = (props) => {
    
    return (
    <div className= {s.Post1} > 
      <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgJFe5MFRhTAv-N5rKU-w8m1pDq-RHYrmoA&usqp=CAU' />
        {props. message}
      <div>
        <span>
          Like- 
          {props. Like}
        </span>
        
       </div>   
    </div>
    );
}
export default Post1;