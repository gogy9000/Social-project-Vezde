import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Posts1.module.css';
import user from '../../../assets/images/User.png'
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../assets/images/User.png";

const Item = (props) => {

    let Path = "/Post_item/";


    return <>

        <div className={s.Post1}>


            <img src={props.photos} />
            <p><NavLink to={Path}>{props.Post_item} </NavLink></p>

            <NavLink to={Path}>Like {props.Like}</NavLink>


        </div>

    </>
}

let Post1 =React.memo (props => {
    console.log('посты отрендерились')

    if (!props.profile) {
        return <div>ответ не пришел</div>
    }

    let post_elements =
     [...props.Profile_Page.Post_item_data].reverse().map(p => <Item Post_item={p.Post_item} Like={p.Like}
        photos={props.profile.photos.small} />)
        
        

    return (
        <div>

            {post_elements}


        </div>
    );
})
export default Post1;
