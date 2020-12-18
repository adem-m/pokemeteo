import React, { useEffect } from "react";

const TOKENS = [
    "b62df3fe008f1f99e7f64505321259d01135ac7d0b795618db702ba8dc43d8e7",
    "6a3c6387a44d78a40f46c4c08a774df3e47362446c55af1a5cac0318398f7e1f"
]
const TYPESURL = "https://api.meteo-concept.com/api/forecast/nextHours?token=" + TOKENS[Math.round(Math.random())] + "&insee=75101"


const WeatherFetcher = ({ setWeatherData }) => {

    useEffect(() => {
        fetch(TYPESURL)
            .then((response) => response.json())
            .then((data) => setWeatherData(data.forecast[0]))
    }, [setWeatherData])

    return (
        <></>
    )
}

export default WeatherFetcher