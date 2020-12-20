import React from "react"
import cityMap from './utilities/CityMap'
import Button from '@material-ui/core/Button';

import './css/city_selector.css'

const CitySelector = ({ setInsee }) => {
    console.log(cityMap.entries())

    const cityArray = []
    cityMap.forEach((value, key) => cityArray.push({ insee: key, cityName: value }))

    return (
        <div className="city-selector">
            {cityArray.map(city => <Button
                variant="contained"
                size="small"
                onClick={() => setInsee(city.insee)}>
                {city.cityName}
            </Button>)}
        </div>
    )
}

export default CitySelector