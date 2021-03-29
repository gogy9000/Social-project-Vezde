import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';
import Message from './Message'

const Messages = (props) => {
  
    return (
     <div>
       {props.message}
     </div>
)
}

const MessageContainer = (props) => {
  //debugger
  let state = props.store.getState()
 

    //let message_element = state.Message_data.map (m =><Messages message={m.message} />)
    //let newMessageBody = state.newMessageBody
    
    let  onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange =(body) => {
        //let body  = body.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return <Message updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClick}
    Messages_Page={state.Messages_Page}  />
 }
 export default MessageContainer ;