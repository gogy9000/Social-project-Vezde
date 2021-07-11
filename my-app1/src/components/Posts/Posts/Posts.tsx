import React, { FC } from 'react';
import s from './Posts.module.css';
import Preloader from '../../Preloader/Preloader';
import { PhotosType, PostType, ProfileType } from '../../../types/types';

type PostsPropsType = {
    photos: any
    PostItem: string
    profile: ProfileType
    Post_item_data: Array<PostType>
    Like: number | null
    id: number

}

type ItemPropsType = {
    photos: any
    PostItem: string | null
    //  profile: ProfileType
    //  Post_item_data: Array<PostType>

    Like: number | null
    id: number | null

}

const Item: FC<ItemPropsType> = ({ PostItem, photos }) => {

    return <>

        <div className={s.Post1}>
            <img src={photos} />
            <>item  <p>{PostItem} </p> </>



        </div>

    </>
}

let Post1: FC<PostsPropsType> = React.memo(({ profile, Post_item_data }) => {


    if (!profile) {
        return <Preloader />
    }






    let post_elements =
        [...Post_item_data].reverse().map(p => <Item PostItem={p.Post_item} Like={p.Like} id={p.id} key={p.id}
            photos={profile.photos.small} />)



    return (
        <div>

            {post_elements}


        </div>
    );
})

export default Post1;
