import React, { useState, useEffect } from "react";
import WeatherMap from './utilities/WeatherMap'
import weatherToType from './utilities/WeatherToType';

const PokemonGenerator = ({ types, weather }) => {
    // const [type, setType] = useState("No type")
    let type = "No type"
    const [pokemon, setPokemon] = useState({})
    const [pokemonFetched, setPokemonFetched] = useState(false)
    const [pokemonSprite, setPokemonSprite] = useState("")

    type = weatherToType(weather, types)

    useEffect(() => {
        console.log('here')
        getSprite(pokemon.url)
    }, [pokemon])

    const setRandomPokemon = (type) => {
        if (type !== "No type") {
            fetch(type.url)
                .then((response) => response.json())
                .then((data) => setPokemon(data.pokemon[Math.floor(Math.random() * (data.pokemon.length / 2))].pokemon))
            setPokemonFetched(true)
        }
    }

    if (!pokemonFetched) {
        setRandomPokemon(type)
    }

    const getSprite = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemonSprite(data.sprites.other.dream_world.front_default))
    }

    return (
        <div>
            Weather is : {WeatherMap.get(weather.weather)}<br />
            The type will be {type.name}<br />
            {pokemon.name}
            <img src={pokemonSprite} alt="" />
        </div>
    )
}

export default PokemonGenerator
