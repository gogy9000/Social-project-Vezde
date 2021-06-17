
import React from 'react'


import { createField, Input, Textarea } from '../common/FormsControls/FormsControls'
import { reduxForm } from "redux-form";

const WeatherForm = (onSubmit) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="city" />
            <button>set city</button>
        </form>
    )


}

const WeatherFormReduxForm = reduxForm({ form: 'edit-city' })(WeatherForm)
export default WeatherFormReduxForm