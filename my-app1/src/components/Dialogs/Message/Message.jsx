import React from 'react';


const Messages = (props) => {
  
    return (
     <div>
       {props.message}
     </div>
)
}

const Message = (props) => {
  
  
 

    let message_element = props.Messages_Page.Message_data.map (m =><Messages message={m.message} key={m.id} />)
    let newMessageBody = props.Messages_Page.newMessageBody
    
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