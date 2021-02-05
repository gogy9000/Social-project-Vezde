import React from 'react';
import s from './Dialogs.module.css';
import Dialogs_data from './Dialogs_data/Dialogs_data';
import Dialogss from './Dialog_items/Dialog_items';
import Message from './Message/Message';


const Dialogs = (props) => {

  
   return (
     <div className={s.Dialogs}> 
       <Dialogss Dialogs_data={props.Dialogs_data} />  
       <Message Message_data={props.Message_data} /> 
     </div> 
   )
}
   





export default Dialogs;