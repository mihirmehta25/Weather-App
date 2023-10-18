import React from 'react';

function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData ? (
        <div>
          <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default WeatherDisplay;