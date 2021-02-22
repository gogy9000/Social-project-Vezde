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
  /* let Dialogs_data = [
      { id: 1, name: 'Motherfucker2'},
      { id: 2, name: 'motherfucker5'},
      { id: 3, name: 'motherfucker6'},
      { id: 4, name: 'motherfucker35'},
      { id: 5, name: 'motherfucker36'},
      { id: 6, name: 'motherfucker878'},
    ]  */
   let  dialogs_elements = props.Dialogs_data.map (dialog => <Dialog_items name={dialog.name} id={dialog.id} />)
     
   
   

    return (
       
    <div>
       
       { dialogs_elements }

    </div>
    )
 }
 
 export default Dialogss;
