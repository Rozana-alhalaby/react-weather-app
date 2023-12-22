 // api.js
export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8fc86fbb93mshb2a8f7d98d3856ap1effdcjsnf92c1939e042",// enter your rapid api key here
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
 
export const getPopulationData = async (city, countryCode) => {
    // Implement logic to fetch population data
    // Return the fetched population data
  };
  
  export const getSunriseSunsetData = async (city, latitude, longitude) => {
    // Implement logic to fetch sunrise-sunset data
    // Return the fetched sunrise-sunset data
  };
  
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "8f8d7b86624e2d3998576c31487c2f7d"; // enter your key from openweather API