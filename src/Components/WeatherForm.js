import React, { useState } from 'react';
import axios from 'axios';

function WeatherForm({ onWeatherData }) {
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e3bde9894265eb21d8e9837d4125e5b&units=metric`
            );
            onWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    );
}

export default WeatherForm;