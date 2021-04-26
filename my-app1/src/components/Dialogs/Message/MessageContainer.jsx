import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/Dialogs-reducer';
import {connect} from 'react-redux'
import Message from './Message'
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  
  return {
    Messages_Page : state.Messages_Page,

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

export default compose(
    connect ( mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Message)
