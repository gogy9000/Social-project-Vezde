import React from 'react';
import s from './Dialogs.module.css';
//import Dialogs_data from './Dialogs_data/Dialogs_data';
import Dialogss from './Dialog_items/Dialog_items';
import Message from './Message/Message';


const Dialogs = (props) => {
 
  
   return (
     <div className={s.Dialogs}> 
       <Dialogss store={props.store}  />  
       <Message store={props.store} /> 
     </div> 
   )
}
   





export default Dialogs;