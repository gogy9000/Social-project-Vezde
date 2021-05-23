import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

const maxLength10 = maxLengthCreator(50)

const LoginForm = (props) => {


    return <div>

        <form onSubmit={props.handleSubmit}>
            
            <div><Field placeholder={'email'} name={'email'} component={Input} validate={[requiredField,maxLength10]}/></div>
            <div><Field placeholder={'password'} name={'password'} component={Input} validate={[requiredField,maxLength10]}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[requiredField,maxLength10]}/>Remember me</div>
            <div>
                {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            </div>
            <div><button>Login</button></div>
        </form>

    </div>


}

const LoginReduxForm = reduxForm({form: 'Login'}) (LoginForm)


const Login =(props) =>{
    const  onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1 >Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps,{login}) (Login)