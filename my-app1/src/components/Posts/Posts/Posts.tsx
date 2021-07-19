import React, { FC } from 'react';
import s from './Posts.module.css';
import Preloader from '../../Preloader/Preloader';
import { ProfilePageType } from '../../../types/types';

type PostsPropsType = {
    profilePage: ProfilePageType
}

type ItemPropsType = {

    postItem: string | null
    likesCount: number | null
    id: number | null
    photos: any
}

const Item: FC<ItemPropsType> = ({ postItem, photos }) => {

    return <>
        {photos ?
            <div className={s.Post1}>
                <img src={photos} className={s.postImg} />
                <div className={s.postItem}>{postItem}</div>



            </div> : null}

    </>
}

let Posts: FC<PostsPropsType> = React.memo(({ profilePage }) => {


    if (!profilePage.profile) {
        return <Preloader />
    }
    let post_elements =
        [...profilePage.postItemData].reverse().map(p => <Item postItem={p.postItem} likesCount={p.likesCount} id={p.id} key={p.id}
            photos={p.photos}
        />)



    return (
        <div>

            {post_elements}


        </div>
    );
})

export default Posts;
