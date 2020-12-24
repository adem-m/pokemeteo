import React, { useState, useEffect } from "react"
import weatherMap from '../utilities/WeatherMap'

import '../css/weather_details.css'

const WeatherDetails = () => {
    const [weatherData, setWeatherData] = useState({})
    useEffect(() => {
        setWeatherData(JSON.parse(localStorage.getItem('weatherData')))
    }, [])

    const getZIP = (zip) => {
        if (zip) {
            if (zip.toString().length === 4) {
                return '0' + zip
            }
            return zip
        }
        return '...'
    }

    return (
        <div>
            <div className="pokemon-sheet-title">Météo détaillée</div>
            <div className="pokemon-details">
                <div className="city-name">{weatherData.city?.name}</div>
                <img src={localStorage.getItem('weatherIcon')} alt="" height="150px" />
                <div className="category-title">Géographie</div>
                <div className="category">
                    <div className="data">
                        <div className="info">Code postal</div>
                        <div>{getZIP(weatherData.city?.cp)}</div>
                    </div>
                    <div className="data">
                        <div className="info">Latitude</div>
                        <div>{weatherData.city?.latitude}</div>
                    </div>
                    <div className="data">
                        <div className="info">Longitude</div>
                        <div>{weatherData.city?.longitude}</div>
                    </div>
                    <div className="data">
                        <div className="info">Altitude</div>
                        <div>{weatherData.city?.altitude} m</div>
                    </div>
                </div>

                <div className="category-title">Météorologie</div>
                {weatherData.forecast ?
                    <div className="category">
                        <div className="data">
                            <div className="info">Température</div>
                            <div>{weatherData.forecast[0].temp2m} °C</div>
                        </div>
                        <div className="data">
                            <div className="info">Humidité</div>
                            <div>{weatherData.forecast[0].rh2m} %</div>
                        </div>
                        <div className="data">
                            <div className="info">Vent</div>
                            <div>{weatherData.forecast[0].wind10m} km/h</div>
                        </div>
                        <div className="data">
                            <div className="info">Rafales</div>
                            <div>{weatherData.forecast[0].gust10m} km/h</div>
                        </div>
                        <div className="data">
                            <div className="info">Probabilité de pluie</div>
                            <div>{weatherData.forecast[0].probarain} %</div>
                        </div>
                        <div className="data">
                            <div className="info">Conditions</div>
                            <div>{weatherMap.get(weatherData.forecast[0].weather)}</div>
                        </div>
                        <div className="data">
                            <div className="info">Température du sol</div>
                            <div>{weatherData.forecast[0].tsoil1} °C</div>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default WeatherDetails