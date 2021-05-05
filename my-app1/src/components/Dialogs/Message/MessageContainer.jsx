import React from 'react';
import { sendMessageCreator,  } from '../../../redux/Dialogs-reducer';
import {connect} from 'react-redux'
import Message from './Message'
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  
  return {
    Messages_Page : state.Messages_Page,

  } 

}


let mapDispatchToProps  = (dispatch) => {
  
  return{

    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}

export default compose(
    connect ( mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Message)
