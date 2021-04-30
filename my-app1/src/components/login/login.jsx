import React from "react";
import {Field, reduxForm} from "redux-form";

const Login =(props) =>{
    const  onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1 >Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


const LoginForm = (props) => {
    return <div>

        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'Login'} component={'input'}/></div>
            <div><Field placeholder={'Password'} name={'Password'} component={'input'}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me</div>
            <div><button>Login</button></div>
        </form>

    </div>


}


const LoginReduxForm = reduxForm({form: 'Login'}) (LoginForm)
export default Login