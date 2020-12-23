import React, { useEffect, useState } from "react"
import { capitalize } from '../utilities/functions'

import '../css/pokemon_details.css'

const PokemonDetails = () => {
    const [pokemonData, setPokemonData] = useState({})
    useEffect(() => {
        setPokemonData(JSON.parse(localStorage.getItem('pokemonData')))
    }, [])
    return (
        <div>
            <div className="pokemon-sheet-title">Fiche Pokémon</div>
            <div className="pokemon-details">
                <div className="pokemon-id">N°{pokemonData.id} </div>
                <div className="pokemon-name">{capitalize(pokemonData.name)}</div>
                <div className="pokemon-stats">
                    <div>Taille : {pokemonData.height / 10} m</div>
                    <div>Poids : {pokemonData.weight / 10} kg</div>
                </div>
                <div className="sprites">
                    <div className="pokemon-sprite">
                        <div className="pokemon-sprite-label">Classique</div>
                        <img src={pokemonData.sprites?.front_default} alt="" />
                    </div>
                    <div className="pokemon-sprite">
                        <div className="pokemon-sprite-label">Shiny</div>
                        <img src={pokemonData.sprites?.front_shiny} alt="" />
                    </div>
                </div>
                <div>
                    <div className="pokemon-abilities-title">Capacités spéciales</div>
                    {pokemonData.abilities?.map(ability => <div className="ability" key={ability.ability.name}>
                        - {capitalize(ability.ability.name)}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails