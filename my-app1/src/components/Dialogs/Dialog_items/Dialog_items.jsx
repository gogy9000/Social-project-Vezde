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

   let Dialogs_data = [
      { id: 1, name: 'Motherfucker2'},
      { id: 1, name: 'motherfucker5'},
      { id: 1, name: 'motherfucker6'},
      { id: 1, name: 'motherfucker35'},
      { id: 1, name: 'motherfucker36'},
      { id: 1, name: 'motherfucker878'},
   ]

    return (
       
    <div>
        
            <Dialog_items name={Dialogs_data[0] .name} id={Dialogs_data[0] .id} />
            <Dialog_items name={Dialogs_data[1] .name} id={Dialogs_data[1] .id} />
            <Dialog_items name={Dialogs_data[2] .name} id={Dialogs_data[2] .id} />
            <Dialog_items name={Dialogs_data[3] .name} id={Dialogs_data[3] .id} />
            <Dialog_items name={Dialogs_data[4] .name} id={Dialogs_data[4] .id} />
            <Dialog_items name={Dialogs_data[5] .name} id={Dialogs_data[5] .id} />
    </div>
    )
 }
 
 export default Dialogss;