import React from 'react';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";


const Messages = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
}


const Message = (props) => {
    let message_element = props.Messages_Page.Message_data.map(m => <Messages message={m.message} key={m.id}/>)
    if (props.isAuth === true) return <Redirect to={'/Login'}/>

   let addMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <>
            <div>{message_element}</div>

            <AddMessageFormRedux onSubmit={addMessage}/>

        </>
    )
}
const maxLength50 = maxLengthCreator(50)

 const AddMessageForms = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} validate={[requiredField,maxLength50]} name='newMessageBody' placeholder='Enter you message'/></div>
            <div>
                <button>нахуярить сообщение</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForms)

export default Message;