import React, { useEffect, useState } from "react";

const TYPESURL = "https://pokeapi.co/api/v2/type"

const TypeFetcher = ({ setTypes }) => {
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        setFetched(true)
        fetch(TYPESURL)
            .then((response) => response.json())
            .then((data) => {
                if (fetched) {
                    setTypes(data["results"])
                }
            })
        return () => {
            setFetched(false)
        }
    }, [setTypes, fetched])

    return (
        <></>
    )
}

export default TypeFetcher