import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import s from './Posts1.module.css';
import Post1 from './Posts1'

let mapStateToProps = (state) => {

    return {
        Post_item_data: state.Profile_Page.Post_item_data
    }
}
const Post1Container = connect(mapStateToProps)(Post1)

export default Post1Container;
