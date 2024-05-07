import { useEffect, useState } from "react"
import { getWeather } from "./api/WeatherApi"
import CityCard from './components/CityCard'


const App = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
      const getCityWeather = async () => {
    setWeather(await getWeather())
  }

  getCityWeather()

  }, [])


  return (
    <>
      <h1>Weather Api</h1>
      <hr />
      {
        !weather ? <h2>Loading...</h2> :
        <CityCard weather={weather}/>
      }
      
      </>
  )
}

export default App
