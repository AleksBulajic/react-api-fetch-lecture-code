// src/App.jsx
import { useEffect, useState } from "react";
import { show } from "./services/weatherService";

import WeatherInput from "./components/WeatherInput";

const App = () => {
  const [weatherF, setWeatherF] = useState('')
  const [weatherC, setWeatherC] = useState('')
  const [location, setLocation] = useState('')

  const setWeather = async (location) => {
    const apiResponse = await show(location)
    setWeatherF(apiResponse.current.temp_f)
    setWeatherC(apiResponse.current.temp_c)
    setLocation(apiResponse.location.name)
  }

  // Compnenet did mount useEffect, that's the behavior
  // of the empty array
  useEffect(() => {
    const data = async () => {
      navigator.geolocation.getCurrentPosition(async function(location) {
        const apiResponse = await show(location.coords.latitude, location.coords.longitude)
        setWeatherF(apiResponse.current.temp_f)
        setWeatherC(apiResponse.current.temp_c)
        setLocation(`${location.coords.latitude}, ${location.coords.longitude}`)
      });
    }
    data()
  }, [])

  return (
    <>
      <h1>Current Weather</h1>
      <h3>{location}</h3>
      <p>F: {weatherF}</p>
      <p>C: {weatherC}</p>
      <WeatherInput setWeather={setWeather} />
    </>
  );
}

export default App