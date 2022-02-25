import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/Auth-reducer";
import { Redirect } from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'


const maxLength10 = maxLengthCreator(50)
const LoginForm = (handleSabmit, error, captchaUrl) => {

    return (
        <div>
            <form onSubmit={handleSabmit}>
                <div><Field placeholder={'email'} name={'email'} component={Input} validate={[requiredField, maxLength10]} /></div>
                <div><Field placeholder={'password'} name={'password'} component={Input} validate={[requiredField, maxLength10]} /></div>
                <div><Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[requiredField, maxLength10]} />Remember me</div>
                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, [])}
                <div><button>Login</button></div>
                {!error && <div className={style.formSummaryError}>{error}</div>}
            </form>
        </div>
    )




}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm)




const Login = (props) => {

    const onSubmit = (formData) => {

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1 >Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})
export default connect(mapStateToProps, { login })(Login)