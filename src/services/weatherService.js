
const API_KEY = 'edf23d2b7de2450e91b194602241608'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
  try {
    const response = await fetch(BASE_URL + `&q=${city}`)
    const weatherData = await response.json()
    return weatherData
  } catch (error) {
    console.error(error)
  }
}

export {
  show
}