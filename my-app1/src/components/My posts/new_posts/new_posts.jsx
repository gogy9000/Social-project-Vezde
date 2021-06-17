import React from 'react';
import s from './new_posts.module.css';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const New_posts = (props) => {


    let onAddPost = (values) => {
        props.AddPost(values.newPostText);
    }

    return (
        <>
            <AddNewPostFormRedux className={s.new_posts} onSubmit={onAddPost} />
        </>
    )


}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'newPostText'} placeholder={''} /></div>
            <div>
                <button>ADD POST</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default New_posts;