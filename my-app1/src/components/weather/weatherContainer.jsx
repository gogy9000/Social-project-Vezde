import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import Weather from './weather';
import { getWeatherData } from '../../redux/profile-reducer'
import { useState } from 'react';

const WeatherContainer = (props) => {

    let [editMode, setEditMode] = useState(true)
    let [city, setCity] = useState()


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)

    }

    const oneSubmit = (event) => {
        event.preventDefault()
        setCity(event.currentTarget.value)

    }
    const dispatchCity = () => {
        city
            ? props.getWeatherData(city)
            : props.getWeatherData('бердагулово')//затычка
        deactivateEditMode()

    }

    return (
        <>

            <div> <Weather {...props}
                editMode={editMode}
                activateEditMode={activateEditMode}
                deactivateEditMode={deactivateEditMode}
                oneSubmit={oneSubmit}
                dispatchCity={dispatchCity} />
            </div>




        </>
    )


}

let mapStateToProps = (state) => ({
    weather: state.profilePage.weather
})

export default compose(
    connect(mapStateToProps, { getWeatherData }),
    withRouter
)(WeatherContainer)
