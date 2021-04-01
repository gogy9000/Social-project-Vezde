import React from 'react';


import Dialogss from './Dialog_items';
import {connect} from 'react-redux'
 


 let mapStateToProps = (state) =>{
   
    return {
      Dialogs_data: state.Messages_Page.Dialogs_data
    }
 }


 const DialogsContainer = connect (mapStateToProps)(Dialogss)
 
  

 
    
   
 
 
 export default DialogsContainer;
