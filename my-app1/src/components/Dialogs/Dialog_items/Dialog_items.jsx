import React from 'react';
import { NavLink } from 'react-router-dom';
//import Dialogs_data from '../Dialogs_data/Dialogs_data';
 

const Dialog_items = (props) => {

    let Path = "/item/" + props.id ;
 
    return (
     <div>
          <NavLink to={Path}>{props.name} </NavLink>
     </div>
    )
 }



 const Dialogss = (props) => {
   let state = props.store.getState().Messages_Page
 
   let  dialogs_elements = state.Dialogs_data.map (dialog => <Dialog_items name={dialog.name} id={dialog.id} />)
   
    return (     
    <div>    
       { dialogs_elements }
    </div>
    )
 }
 
 export default Dialogss;
