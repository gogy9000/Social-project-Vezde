import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Posts1.module.css';

const Item = (props) => {
  
  let Path= "/Post_item/"  ;
  return (
  <div className={s.Post1}>
    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgJFe5MFRhTAv-N5rKU-w8m1pDq-RHYrmoA&usqp=CAU' />
   <p> <NavLink to={Path} >{props.Post_item} </NavLink></p>
   
    <NavLink to={Path} >Like {props.Like}</NavLink>
    </div>
  )
}

const Post1 = (props) => {
  
   let post_elements = props.Post_item_data.map (p => <Item Post_item={p.Post_item} Like={p.Like} />)
    
    return (
    <div  > 
      
        {post_elements}
       {/*} <Item Post_item={Post_item_data[0] .Post_item} Like={Post_item_data[0] .Like} />
        <Item Post_item={Post_item_data[1] .Post_item} Like={Post_item_data[1] .Like} />
        <Item Post_item={Post_item_data[2] .Post_item} Like={Post_item_data[2] .Like} />
        <Item Post_item={Post_item_data[3] .Post_item} Like={Post_item_data[3] .Like} />
        <Item Post_item={Post_item_data[4] .Post_item} Like={Post_item_data[4] .Like} />
        <Item Post_item={Post_item_data[5] .Post_item} Like={Post_item_data[5] .Like} />
    <Item Post_item={Post_item_data[6] .Post_item} Like={Post_item_data[6] .Like} />*/}
        
    </div>
    );
}
export default Post1;
