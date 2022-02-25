import React from 'react';
import s from './Music.module.css';

const Music = () => {
    return (
        <div className={s.Music}>
            <script src="https://music.yandex.ru/api/audio/dist/index.min.js"></script>
        </div>


    );
}
export default Music;