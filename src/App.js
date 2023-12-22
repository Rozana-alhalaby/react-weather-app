import React, { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [apiKey, setApiKey] = useState(""); // State to store the user's API key

  async function handleOnSearchChange(searchData) {
    try {
      const [lat, lon] = searchData.value.split(" ");
  
      const responseWeather = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      if (!responseWeather.ok) {
        throw new Error(`Weather API request failed with status: ${responseWeather.status}`);
      }
  
      const responseForecast = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      if (!responseForecast.ok) {
        throw new Error(`Forecast API request failed with status: ${responseForecast.status}`);
      }
  
      const weatherResponse = await responseWeather.json();
      const forecastResponse = await responseForecast.json();
  
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    } catch (error) {
      // Handle errors here
      console.error("Error fetching or processing data:", error.message);
      // Optionally, you can also set state to display an error message to the user
      // setErrorState(true);
    }
  }
  

  return (
    <div className="container">
      {/* Input for the user's API key */}
      <input className="apikey"
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
