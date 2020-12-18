import React, { useState } from "react";

import './App.css';
import TypeFetcher from './pokeapi/TypeFetcher'
import WeatherFetcher from './weatherapi/WeatherFetcher'
import PokemonGenerator from './PokemonGenerator'

function App() {
  const [types, setTypes] = useState([])
  const [weather, setWeather] = useState({})

  return (
    <div className="App">
      <TypeFetcher setTypes={setTypes}/>
      <WeatherFetcher setWeatherData={setWeather}/>
      {types.length > 0 && Object.keys(weather).length > 0
        ? <PokemonGenerator types={types} weather={weather} /> : ''}
      
    </div>
  );
}

export default App;
