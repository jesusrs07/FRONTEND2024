export const getWeather = async () => {
    const key = 'e2e7c211cbe54ba6aaa160216240205'
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=no`
    const response = await fetch(url)
    const weather = await response.json()

    //console.log(weather.current.condition.text)
    return weather
}