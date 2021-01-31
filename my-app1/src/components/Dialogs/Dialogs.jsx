import React from 'react';
import s from './Dialogs.module.css';
import Dialogss from './Dialog_items/Dialog_items';
import Message from './Message/Message';


const Dialogs = () => {
   return (
     <div className={s.Dialogs}> 
       <Dialogss />  
       <Message /> 
     </div> 
   )
}
   





export default Dialogs;