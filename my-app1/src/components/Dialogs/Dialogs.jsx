import React from 'react';
import s from './Dialogs.module.css';
//import Dialogs_data from './Dialogs_data/Dialogs_data';
import DialogsContainer from './Dialog_items/Dialog_items_Container';
import MessageContainer from './Message/MessageContainer'


const Dialogs = (props) => {
 
  
   return (
     <div className={s.Dialogs}> 
       <DialogsContainer store={props.store}  />  
       <MessageContainer store={props.store} /> 
     </div> 
   )
}
   





export default Dialogs;