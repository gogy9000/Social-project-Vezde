import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialogss from './Dialog_items';
//import Dialogs_data from '../Dialogs_data/Dialogs_data';
 

/*const Dialog_items = (props) => {

    let Path = "/item/" + props.id ;
 
    return (
     <div>
          <NavLink to={Path}>{props.name} </NavLink>
     </div>
    )
 }*/



 const DialogsContainer = (props) => {
   let state = props.store.getState()
 
   //let  dialogs_elements = state.Dialogs_data.map (dialog => <Dialog_items name={dialog.name} id={dialog.id} />)
   
    return  <Dialogss Dialogs_data={state.Messages_Page.Dialogs_data}  />
   
 }
 
 export default DialogsContainer;
