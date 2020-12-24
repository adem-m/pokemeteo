import React from "react"
import Button from '@material-ui/core/Button';

import '../css/welcome_page.css'

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <div className="welcome-title">Bienvenue sur PokéMétéo</div>
            <div className="description">
                <div>Cette application a été réalisée dans le cadre du cours électif de React dispensé par Stéphane KARRAZ.</div>
                <div>
                    Vous pouvez y découvrir un Pokémon déterminé par les conditions météo actuelles et ce, pour plusieurs villes.
                    L'application offre également des informations détaillées sur la météo et sur le Pokémon en question.
                </div>
                <div>Pour la partie graphique, j'ai utilisé la bibliothèque Material et j'ai fait appel
                    à deux APIs pour récupérer les données nécessaires au bon fonctionnement de cette application</div>
                <div className="api">
                    <div className="api-name">PokéApi</div>
                    <div>
                        API fournissant une très grande quantité de données en tout en genre en ce qui concerne l'univers de Pokémon.
                    </div>
                    <div className="api-link">
                        <Button variant="outlined" color="primary" onClick={() => window.location.href = "https://pokeapi.co/docs/v2"}>Documentation</Button>
                    </div>
                </div>
                <div className="api">
                    <div className="api-name">API Météo Concept</div>
                    <div>
                        API française et très complète de données météorologiques.
                    </div>
                    <div className="api-link">
                        <Button variant="outlined" color="primary" onClick={() => window.location.href = "https://api.meteo-concept.com/documentation"}>Documentation</Button>
                    </div>
                </div>
            </div>
            <div className="go-button">
                <Button variant="contained" onClick={() => window.location.href = "/home"}>Accéder à PokéMétéo</Button>
            </div>
        </div>
    )
}

export default WelcomePage