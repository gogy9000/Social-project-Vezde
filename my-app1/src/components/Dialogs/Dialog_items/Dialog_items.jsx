import React from 'react';
import { NavLink } from 'react-router-dom';

 

const Dialog_items = (props) => {

    let Path = "/item/" + props.id ;
 
    return (
     <div>
          <NavLink to={Path}>{props.name} </NavLink>
     </div>
    )
 }



 const Dialogss = (props) => {

   
 
   let  dialogs_elements = props.Dialogs_data.map (dialog => <Dialog_items name={dialog.name} id={dialog.id} key={dialog.id} />)
   
    return (
    <div>    
       { dialogs_elements }
    </div>
    )
 }
 
 export default Dialogss;
