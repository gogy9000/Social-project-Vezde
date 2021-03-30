import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';
import storeContext from '../../../store-context';
import Message from './Message'

/*const Messages = (props) => {
  
    return (
     <div>
       {props.message}
     </div>
)
}*/

const MessageContainer = () => {
  
  //let state = props.store.getState()
 

    //let message_element = state.Message_data.map (m =><Messages message={m.message} />)
    //let newMessageBody = state.newMessageBody
    return <storeContext.Consumer>
      {store => {
    //debugger
    let  onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange =(body) => {
        //let body  = body.target.value
        store.dispatch(updateNewMessageBodyCreator(body))
        
    }

    return <Message updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    Messages_Page={store.getState().Messages_Page}  />
  }

  }
</storeContext.Consumer>
 }
 export default MessageContainer ;