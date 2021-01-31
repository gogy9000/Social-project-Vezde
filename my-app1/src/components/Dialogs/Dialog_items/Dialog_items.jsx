import React from 'react';
import { NavLink } from 'react-router-dom';

const Dialog_items = (props) => {

    let Path = "/item" + props.id ;
 
    return (
       <div>
                <NavLink to={Path}>{props.name}</NavLink>
             </div>
    )
 }


 const Dialogss = (props) => {
    return (
       
    <div>
        
            <Dialog_items name="Motherfuker1" id="1" />
            <Dialog_items name="Motherfuker2" id="2" />
            <Dialog_items name="Motherfuker3" id="3" />
            <Dialog_items name="Motherfuker4" id="4" />
            <Dialog_items name="Motherfuker5" id="5" />
            <Dialog_items name="Motherfuker6" id="6" />
        
    </div>
    )
 }
 
 export default Dialogss;