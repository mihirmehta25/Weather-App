import React, { useState } from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import WeatherDisplay from './Components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <WeatherForm onWeatherData={handleWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;