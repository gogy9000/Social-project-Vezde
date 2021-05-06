import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Login =(props) =>{
    const  onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1 >Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {


    return <div>

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'Login'} component={Input} validate={[requiredField,maxLength10]}/></div>
            <div><Field placeholder={'Password'} name={'Password'} component={Input} validate={[requiredField,maxLength10]}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[requiredField,maxLength10]}/>Remember me</div>
            <div><button>Login</button></div>
        </form>

    </div>


}


const LoginReduxForm = reduxForm({form: 'Login'}) (LoginForm)
export default Login