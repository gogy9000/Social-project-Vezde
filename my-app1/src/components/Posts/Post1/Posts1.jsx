import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Posts1.module.css';

const Item = (props) => {
  
  let Path= "/Post_item/"  ;
  return (
  <div className={s.Post1}>
    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgJFe5MFRhTAv-N5rKU-w8m1pDq-RHYrmoA&usqp=CAU' />
   <p> <NavLink to={Path} >{props.Post_item} </NavLink> </p>
   
    <NavLink to={Path} >Like {props.Like}</NavLink>
    </div>
    
  )
}

const Post1 = (props) => {
  let state = props.store.getState();
  
  
   let post_elements =state.Profile_Page.Post_item_data.map (p => <Item Post_item={p.Post_item} Like={p.Like} />)
   
    return (
    <div  > 
      
        {post_elements}
       
        
    </div>
    );
}
export default Post1;
