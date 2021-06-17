import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import Weather from './weather';
import { getWeatherData } from '../../redux/profile-reducer'

import Preloader from '../Preloader/Preloader';
import WeatherForm from './weatherForm';
import { useState, useEffect } from 'react';

const WeatherContainer = (props) => {

    let [editMode, setEditMode] = useState(false)
    // let [city, setCity] = useState(props.weather)

    // useEffect(
    //     () => {
    //         setCity(props.weather)
    //     },
    //     [props.weather]
    // )

    const activateEditMode = () => {
        setEditMode(false)
    }

    const deactivateEditMode = () => {
        setEditMode(true)

    }






    const oneSubmit = (e) => {
        // setCity(e.currentTarget.value)
        e.preventDefault()
        let city = e.currentTarget.value
        props.getWeatherData(city)
    }






    return (
        <>

            {editMode && <div><Weather {...props} activateEditMode={activateEditMode} /> </div>}

            {!editMode &&
                <div>
                    <input onChange={oneSubmit} autoFocus={true} onBlur={deactivateEditMode} placeholder={'погода в:(на латинице)'}
                    />
                </div>
            }

        </>
    )


}

let mapStateToProps = (state) => ({
    weather: state.Profile_Page.weather
})

export default compose(
    connect(mapStateToProps, { getWeatherData }),
    withRouter
)(WeatherContainer)
{/* {props.weather ? <Weather {...props.weather} oneSubmit={oneSubmit} /> : <Preloader />} */ }

{/* <form onSubmit={oneSubmit}>
                <input type="text" name="city" />
                <button>set city</button>
            </form> */}