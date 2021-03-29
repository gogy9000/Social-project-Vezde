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
  debugger
  let state = props.Messages_Page
 

    let message_element = state.Message_data.map (m =><Messages message={m.message} />)
    let newMessageBody = state.newMessageBody
    
    let  onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange =(e) => {
        let body  = e.target.value
        props.updateNewMessageBody(body)
        //props.store.dispatch(updateNewMessageBodyCreator(body))

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
           <div><button onClick= {onSendMessageClick} >нахуярить сообщение</button></div>
          
         </div>       
     )
 }
 export default Message ;