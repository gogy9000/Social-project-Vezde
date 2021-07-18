import React, { FC } from 'react';
import s from './Posts.module.css';
import Preloader from '../../Preloader/Preloader';
import { PhotosType, PostType, ProfilePageType, ProfileType } from '../../../types/types';

type PostsPropsType = {
    profilePage: ProfilePageType

    // profile?: ProfileType
    // postItemData?: Array<PostType>
    // likesCount?: number | null
    // id?: number

}

type ItemPropsType = {
    postItem: string | null
    // photos: any
    likesCount: number | null
    id: number | null



}

const Item: FC<ItemPropsType> = ({ postItem, }) => {

    return <>

        <div className={s.Post1}>
            {/* <img src={photos} /> */}
            <>item  <p>{postItem} </p> </>



        </div>

    </>
}

let Posts: FC<PostsPropsType> = React.memo(({ profilePage }) => {


    if (!profilePage.profile) {
        return <Preloader />
    }






    let post_elements =
        [...profilePage.postItemData].reverse().map(p => <Item postItem={p.postItem} likesCount={p.likesCount} id={p.id} key={p.id}
        // photos={profilePage.profile.photos.small}
        />)



    return (
        <div>

            {post_elements}


        </div>
    );
})

export default Posts;
