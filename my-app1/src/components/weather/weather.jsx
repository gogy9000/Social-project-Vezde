import React from 'react';
import s from './weather.module.css'

const Weather = (props) => {


    return (

        props.weather === null ?

            <div className={s.weather}>
                <input autoFocus={true} placeholder={'погода:'} onChange={props.oneSubmit} onBlur={props.dispatchCity} />


            </div> :
            <div className={s.weather}>
                <div className={s.weatherDescriptions}>

                    <div>
                        {props.editMode ?
                            <input autoFocus={true} placeholder={props.weather.name} onChange={props.oneSubmit} onBlur={props.dispatchCity} /> :
                            <span onClick={props.activateEditMode}>Город:<b className={s.cityName}>{props.weather.name}</b></span>}

                    </div>
                    {props.weather.sys.country === 'RU' ? <div>Рoссия</div> : <div>{props.weather.sys.country} </div>}

                    <div>Температура:{props.weather.main.temp + 'C'}</div>
                    <div>Давление:{props.weather.main.pressure}кПа</div>
                    <div>Влажность:{props.weather.main.humidity}%</div>
                    <div>Облачность:{props.weather.clouds.all}%</div>
                    <div>{props.weather.weather[0].description}:</div>
                </div>
                <div className={s.weatherImgDescriptions}>


                    <img className={s.weatherImg} src={`https://openweathermap.org/img/wn/${props.weather.weather[0]['icon']}@2x.png`} />


                </div>
            </div>

    )
}
export default Weather