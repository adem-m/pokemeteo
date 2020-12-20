import React, { useState, useEffect } from "react"
import weatherToType from './utilities/WeatherToType'

import './css/pokemon.css'

const Pokemon = ({ types, weather }) => {
    let type = "No type"
    const [pokemon, setPokemon] = useState({})
    const [pokemonFetched, setPokemonFetched] = useState(false)
    const [pokemonSprite, setPokemonSprite] = useState("")

    type = weatherToType(weather, types)

    useEffect(() => {
        if (!pokemonFetched) {
            setRandomPokemon(type)
        }
        getSprite(pokemon.url)
    })

    useEffect(() => {
        setPokemonFetched(false)
    }, [weather])

    const setRandomPokemon = (typeObject) => {
        fetch(typeObject.url)
            .then((response) => response.json())
            .then((data) => {
                setPokemonFetched(true)
                setPokemon(data.pokemon[Math.floor(Math.random() * (data.pokemon.length / 2))].pokemon)
            })
    }

    const getSprite = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPokemonSprite(data.sprites.other.dream_world.front_default))
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className="pokemon-body">
            <img src={pokemonSprite} alt="" height="200px" />
            <div className="name">{capitalize(pokemon.name)}</div>
        </div>
    )
}

export default Pokemon
