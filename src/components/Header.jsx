import React from "react"

import '../css/header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-title" onClick={() => { if (window.location.pathname !== '/home') window.location.href = "/home" }}>
                PokéMétéo
            </div>
        </div>
    )
}

export default Header