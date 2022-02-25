


import Dialogs from './dialogItems';
import { connect } from 'react-redux'



let mapStateToProps = (state) => {

  return {
    dialogsData: state.messagesPage.dialogsData
  }
}


const DialogsContainer = connect(mapStateToProps)(Dialogs)








export default DialogsContainer;
