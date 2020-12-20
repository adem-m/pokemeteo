import weatherMap from './WeatherMap';

const weatherToTypeMap = new Map()
weatherToTypeMap.set('Soleil', 'fire')
weatherToTypeMap.set('Nuageux', 'flying')
weatherToTypeMap.set('Brouillard', 'ghost')
weatherToTypeMap.set('Pluie', 'water')
weatherToTypeMap.set('Averses', 'water')
weatherToTypeMap.set('Neige', 'ice')
weatherToTypeMap.set('Orages', 'electric')

export const getWeatherName = (weather) => {
    const longWeather = weatherMap.get(weather.weather)
    const words = longWeather.split(' ')
    return words[0]
}

const weatherToType = (weather, types) => {
    let foundType = null
    types.forEach(type => {
        if (type.name === weatherToTypeMap.get(getWeatherName(weather))) {
            foundType = type
        }
    });
    return foundType
}

export default weatherToType