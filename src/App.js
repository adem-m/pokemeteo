import React, { useState } from "react"

import './App.css';
import Header from './Header'
import TypeFetcher from './pokeapi/TypeFetcher'
import WeatherFetcher from './weatherapi/WeatherFetcher'
import Arrow from './Arrow'
import Pokemon from './Pokemon'
import Weather from './Weather'

function App() {
  const [types, setTypes] = useState([])
  const [weather, setWeather] = useState({})
  const [insee, setInsee] = useState("75101")

  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <TypeFetcher setTypes={setTypes}/>
        <WeatherFetcher setWeatherData={setWeather} insee={insee}/>
        <Weather weatherData={weather} setInsee={setInsee} />
        <Arrow />
        {types.length > 0 && Object.keys(weather).length > 0
          ? <Pokemon types={types} weather={weather} /> : ''}
      </div>      
    </div>
  );
}

export default App;
