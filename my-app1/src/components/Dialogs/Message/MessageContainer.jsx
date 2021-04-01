import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';
import {connect} from 'react-redux'
import Message from './Message'

let mapStateToProps = (state) => {
  
  return {
    Messages_Page : state.Messages_Page
  } 

}


let mapDispatchToProps  = (dispatch) => {
  
  return{
    updateNewMessageBody: (body) =>{
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}
 



const MessageContainer = connect ( mapStateToProps,mapDispatchToProps) (Message)

 export default MessageContainer ;