import React from 'react';

const Weather = (props) => {
    return (

        <div>
            <div>страна:{props.weather.sys.country}</div>
            <div>Город: {props.weather.name} </div>
            <div>Температура:{props.weather.main.temp}C</div>
            <div>Давление:{props.weather.main.pressure}кПа</div>
            <div>Влажность:{props.weather.main.humidity}%</div>
            <div>{props.weather.weather[0].description}</div>
            <div>облачность:{props.weather.clouds.all}%</div>
            <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0]['icon']}@2x.png`} />
            <button onClick={props.activateEditMode} >изменить город</button>
        </div>
    )
}
export default Weather