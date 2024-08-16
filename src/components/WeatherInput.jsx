import { useState } from "react"

function WeatherInput(props) {
  const [value, setValue] = useState('')
  const { setWeather } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    // Pass in a setter from App.jsx
    setWeather(value)
    setValue('')
  }

  const handleChange = (event) => {
    const { value } = event.target
    setValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter City:</label>
      <input 
        value={value}
        onChange={handleChange}
        name='weatherInput'
      />
      <button>Check Weather</button>
    </form>
  )
}

export default WeatherInput