import './App.css';
import { useState } from 'react';
import axios from 'axios'
import ShowTemp from './DisplayCompoent'

function App() {
  // State variables
  const [city, setCity] = useState(""); // Input field for city
  const [data, setData] = useState({ // Weather data
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  });

  const [error, setError] = useState(null); // Error message state

  // Function to handle button click and fetch weather data
  const handleClick = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6&units=metric`)
      .then((response) => {
        setError(null); // Clear any previous error
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
        });
      })
      .catch((error) => {
        setError('City not found. Please enter a valid city.'); // Set the error message
        setData({}); // Clear data in case of error
      });
  }

  return (
    <>
      <div className='container text-center my-2'>
        <h1>Check the weather forecast</h1>

        {/* Input field for entering city */}
        <input type="text" className='from-control' value={city} onChange={(e) => {
          setCity(e.target.value);
        }} />
        {/* Button to trigger weather data retrieval */}
        <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>CHECK</button>
        {/* Display error message if there is an error */}
        {error && <p className="text-danger">{error}</p>}
      </div>

      {/* Display weather data */}
      <ShowTemp text={data}></ShowTemp>
    </>
  )
}

export default App;
