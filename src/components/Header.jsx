import React from "react"

import '../css/header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-title" onClick={() => { if (window.location.pathname !== '/') window.location.href = "/" }}>
                PokéMétéo
            </div>
        </div>
    )
}

export default Header