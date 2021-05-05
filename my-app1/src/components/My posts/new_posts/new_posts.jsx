import React from 'react';
import s from './new_posts.module.css';
import {Field, reduxForm} from "redux-form";


const New_posts = (props) => {


    let onAddPost = (values) => {
        props.AddPost(values.newPostText);
    }

    return (
        <>
            <AddNewPostFormRedux className={s.new_posts} onSubmit={onAddPost}/>
        </>
    )


}

const AddNewPostForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div><Field component='textarea' name='newPostText' placeholder='Enter you Post'></Field></div>
            <div>
                <button>ADD POST</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default New_posts;