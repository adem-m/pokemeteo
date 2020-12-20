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

  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <TypeFetcher setTypes={setTypes}/>
        <WeatherFetcher setWeatherData={setWeather}/>
        <Weather weatherData={weather} />
        <Arrow />
        {types.length > 0 && Object.keys(weather).length > 0
          ? <Pokemon types={types} weather={weather} /> : ''}
      </div>      
    </div>
  );
}

export default App;
