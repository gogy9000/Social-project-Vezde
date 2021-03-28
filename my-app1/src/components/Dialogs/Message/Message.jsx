import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';

const Messages = (props) => {
  
    return (
     <div>
       {props.message}
     </div>
)
}

const Message = (props) => {
  //debugger
  let state = props.store.getState().Messages_Page
 

    let message_element = state.Message_data.map (m =><Messages message={m.message} />)
    let newMessageBody = state.newMessageBody
    
    let  onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange =(e) => {
        let body  = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
         <div>
           <div>{message_element}</div> 
           <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter you message' >
                </textarea>
           </div>
           <div><button onClick= {onSendMessageClick} >хуячить</button></div>
          
         </div>       
     )
 }
 export default Message ;