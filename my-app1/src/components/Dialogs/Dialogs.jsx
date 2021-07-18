import React from 'react';
import s from './Dialogs.module.css';
import DialogsContainer from './Dialog_items/DialogItemsContainer';
import MessageContainer from './Message/MessageContainer'


const Dialogs = () => {


  return (
    <div className={s.Dialogs}>
      <DialogsContainer />
      <MessageContainer />
    </div>
  )
}






export default Dialogs;