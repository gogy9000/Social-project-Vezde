import React from 'react';
import { NavLink } from 'react-router-dom';

 

const DialogItems = (props) => {

    let Path = "/item/" + props.id ;
 
    return (
     <div>
          <NavLink to={Path}>{props.name} </NavLink>
     </div>
    )
 }



 const Dialogs = (props) => {

   
 
   const  dialogs_elements = props.Dialogs_data.map (dialog => <DialogItems name={dialog.name} id={dialog.id} key={dialog.id} />)
   
    return (
    <div>    
       { dialogs_elements }
    </div>
    )
 }
 
 export default Dialogs;
