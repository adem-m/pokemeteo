import React, { useState, useEffect } from "react"
import weatherToType from '../utilities/WeatherToType'
import Button from '@material-ui/core/Button';
import { capitalize } from '../utilities/functions'

import '../css/pokemon.css'

const Pokemon = ({ types, weather }) => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonFetched, setPokemonFetched] = useState(false)
    const [pokemonSprite, setPokemonSprite] = useState("")

    let type = weatherToType(weather, types)

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
            .then((data) => {
                localStorage.setItem("pokemonData", JSON.stringify(data))
                setPokemonSprite(data.sprites.other.dream_world.front_default)
            })
    }

    return (
        <div className="pokemon-body">
            <img src={pokemonSprite} alt="" height="200px" />
            <div className="name">{capitalize(pokemon.name)}</div>
            <div className="pokemon-details-button">
                <Button onClick={() => window.location.href = "/pokemon-details"}>Plus</Button>
            </div>
        </div>
    )
}

export default Pokemon
