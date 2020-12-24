import React, { useState } from "react"

import './App.css';
import Header from './components/Header'
import TypeFetcher from './pokeapi/TypeFetcher'
import WeatherFetcher from './weatherapi/WeatherFetcher'
import Arrow from './components/Arrow'
import Pokemon from './components/Pokemon'
import Weather from './components/Weather'
import WeatherTable from './components/WeatherTable'
import PokemonDetails from './components/PokemonDetails'
import WeatherDetails from './components/WeatherDetails'
import WelcomePage from "./components/WelcomePage";

function App() {
    const [types, setTypes] = useState([])
    const [weather, setWeather] = useState({})
    const [insee, setInsee] = useState("75101")

    const showWelcome = () => {
        if (window.location.pathname === '/')
        return (
            <div>
                <WelcomePage />
            </div>
        )
    }

    const showMain = () => {
        if (window.location.pathname === '/home')
            return (
                <>
                    <TypeFetcher setTypes={setTypes} />
                    <WeatherFetcher setWeatherData={setWeather} insee={insee} />
                    <Weather weatherData={weather} setInsee={setInsee} />
                    <Arrow />
                    {types.length > 0 && Object.keys(weather).length > 0
                        ? <Pokemon types={types} weather={weather} /> : ''}
                </>
            )
    }

    const showPokemonDetails = () => {
        if (window.location.pathname === '/pokemon-details')
            return (
                <div className="pokemon-details-page">
                    <WeatherTable />
                    <PokemonDetails />
                </div>
            )
    }

    const showWeatherDetails = () => {
        if (window.location.pathname === '/weather-details')
            return (
                <div className="weather-details-page">
                    <WeatherDetails />
                </div>
            )
    }

    return (
        <div className="App">
            <div className="app-header">
                <Header />
            </div>
            <div className="app-body">
                {showWelcome()}
                {showMain()}
                {showPokemonDetails()}
                {showWeatherDetails()}
            </div>
        </div>
    );
}

export default App;
