import React, { useEffect } from "react";

const TYPESURL = "https://pokeapi.co/api/v2/type"

const TypeFetcher = ({ setTypes }) => {

    useEffect(() => {
        fetch(TYPESURL)
            .then((response) => response.json())
            .then((data) => setTypes(data["results"]))
    }, [setTypes])

    return (
        <></>
    )
}

export default TypeFetcher