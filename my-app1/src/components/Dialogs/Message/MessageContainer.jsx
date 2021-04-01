import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';
import {connect} from 'react-redux'
import Message from './Message'



let mapDispatchToProps = (dispatch) => {
  
  return{
    updateNewMessageBody: (body) =>{
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}
  let mapStateToProps = (state) => {
    //debugger
    return {
      Messages_Page: state.Messages_Page
    } 
  
  }



const MessageContainer = connect (mapDispatchToProps, mapStateToProps) (Message)

 export default MessageContainer ;