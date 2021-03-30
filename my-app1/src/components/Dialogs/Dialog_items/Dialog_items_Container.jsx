import React from 'react';
import { NavLink } from 'react-router-dom';
import storeContext from '../../../store-context';
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



 const DialogsContainer = () => {
    //debugger
  // let state =store.getState()
 
   //let  dialogs_elements = state.Dialogs_data.map (dialog => <Dialog_items name={dialog.name} id={dialog.id} />)
   
    return  <storeContext.Consumer> 
         { store=>{
          
               let state =store.getState()
               return <Dialogss 
               Dialogs_data={store.getState().Messages_Page.Dialogs_data}  />}
            }
         
           </storeContext.Consumer>
 }
 
  

 
    
   
 
 
 export default DialogsContainer;
