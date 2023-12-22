import React, { useState, useEffect } from "react";
import { getPopulationData, getSunriseSunsetData } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faWind, faTachometer } from "@fortawesome/free-solid-svg-icons";
 
import "./current-weather.css";
const CurrentWeather = ({ data }) => {
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    getPopulationData(data.city, data.countryCode).then((populationData) => {
      setPopulation(populationData);
    });
  }, [data.city, data.countryCode]);

  return (
    <div className="weather-container">
      <div className="left-box">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
        {population && <p className="population">Population: {population}</p>}
        {/* Add other basic information like date */}
      </div>
      <div className="right-box">
        <div className="top">
         
          <div className="temperature">{Math.round(data.main.temp)}°C</div>
        </div>
        <div className="bottom">
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">
                <FontAwesomeIcon icon={faTint} /> Humidity
              </span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">
                <FontAwesomeIcon icon={faWind} /> Wind
              </span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
        <span className="parameter-label">
          <FontAwesomeIcon icon={ faTachometer}/> Pressure
        </span>
        <span className="parameter-value">{data.main.pressure} hPa</span>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
