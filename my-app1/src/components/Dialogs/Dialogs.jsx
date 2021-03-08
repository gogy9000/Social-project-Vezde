import React from 'react';
import s from './Dialogs.module.css';
//import Dialogs_data from './Dialogs_data/Dialogs_data';
import Dialogss from './Dialog_items/Dialog_items';
import Message from './Message/Message';


const Dialogs = (props) => {
  debugger;
 /* let Dialogs_data = [
    { id: 1, name: 'Motherfucker2'},
    { id: 2, name: 'motherfucker5'},
    { id: 3, name: 'motherfucker6'},
    { id: 4, name: 'motherfucker35'},
    { id: 5, name: 'motherfucker36'},
    { id: 6, name: 'motherfucker878'},
  ]*/

  
   return (
     <div className={s.Dialogs}> 
       <Dialogss Dialogs_data={props.Messages_Page.Dialogs_data} />  
       <Message Message_data={props.Messages_Page.Message_data} /> 
     </div> 
   )
}
   





export default Dialogs;