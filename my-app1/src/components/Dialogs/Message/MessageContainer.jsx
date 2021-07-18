
import { sendMessageCreator, } from '../../../redux/Dialogs-reducer';
import { connect } from 'react-redux'
import Message from './Message'
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps = (state) => {

  return {
    messagesPage: state.messagesPage,

  }

}


let mapDispatchToProps = (dispatch) => {

  return {

    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Message)
