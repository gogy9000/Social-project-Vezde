import React from 'react';
import s from './Posts1.module.css';
import Preloader from '../../Preloader/Preloader';

const Item = (props) => {

    return <>

        <div className={s.Post1}>
            <img src={props.photos} />
            <>item  <p>{props.Post_item} </p> </>



        </div>

    </>
}

let Post1 = React.memo(props => {


    if (!props.profile) {
        return <Preloader />
    }






    let post_elements =
        [...props.Profile_Page.Post_item_data].reverse().map(p => <Item Post_item={p.Post_item} Like={p.Like} id={p.id} key={p.id}
            photos={props.profile.photos.small} />)



    return (
        <div>

            {post_elements}


        </div>
    );
})

export default Post1;
