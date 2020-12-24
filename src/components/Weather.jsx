import React, { useState, useEffect } from "react"
import CitySelector from './CitySelector'
import weatherMap from '../utilities/WeatherMap'
import { getWeatherName } from '../utilities/WeatherToType'
import weatherIconMap from '../utilities/WeatherIconMap'
import Button from '@material-ui/core/Button';

import '../css/weather.css'

const Weather = ({ weatherData, setInsee }) => {
    const [weatherIcon, setWeatherIcon] = useState("")

    const getWeatherUrl = (key) => {
        return "https://cdn4.iconfinder.com/data/icons/weatherful/72/" + key + "-512.png"
    }

    useEffect(() => {
        if (Object.keys(weatherData).length > 0)
            {
                const icon = getWeatherUrl(weatherIconMap.get(getWeatherName(weatherData)))
                localStorage.setItem('weatherIcon', icon)
                setWeatherIcon(icon)
            }
    }, [weatherData])

    return (
        <div className="weather-body">
            <div className="city">{weatherData.cityName}</div>
            <div className="core-data">
                <img src={weatherIcon} alt="" width="200px" />
                <div>
                    <div className="temperature">{weatherData.temp2m} °C</div>
                    <div className="conditions">{weatherMap.get(weatherData.weather)}</div>
                </div>
            </div>
            <div>Vitesse du vent : {weatherData.wind10m} km/h</div>
            <div>Probabilité de pluie : {weatherData.probarain} %</div>
            <CitySelector setInsee={setInsee} />
            <div className="pokemon-details-button">
                <Button onClick={() => window.location.href = "/weather-details"}>Plus</Button>
            </div>
        </div>
    )
}

export default Weather