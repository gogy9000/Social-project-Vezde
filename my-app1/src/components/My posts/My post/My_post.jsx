import React from 'react';
import s from './My_post.module.css';

const My_post = (props) => {
    return (
        <div className={s.My_post}>
            {props.profile ? 'ответ пришел' : 'ответ еще не пришел'}

        </div>



    );
}
export default My_post;