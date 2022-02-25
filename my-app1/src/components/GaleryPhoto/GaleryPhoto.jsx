import React, { useEffect, useState } from 'react'
import s from './GaleryPhoto.module.css'

const Photo = (props) => {
    debugger
    return <span>
        {props.photo === null ? null : <img className={s.photo} src={URL.createObjectURL(props.photo)} />}
    </span>
}



const GaleryPhoto = React.memo((props) => {



    const fileHandler = (e) => {
        props.addPhoto(e.currentTarget.files[0])

    }

    let elementsPhoto = [...props.photosPage.photosData].reverse().map(ph => < Photo photo={ph.photo} id={ph.id} key={ph.id} />)


    return (
        <div>
            <input className={s.input} type={'file'} onChange={fileHandler} />


            <div >{elementsPhoto}</div>
        </div>
    );
})
export default GaleryPhoto

