import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'Api-key-1'; // Hardcoded API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWeather('');
    setError('');
    setLoading(true);

    if (!city || !country) {
      setError('Please provide both city and country.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('https://localhost:7032/api/weather', {
        params: { city, country, apiKey },
      });
      setWeather(`Weather: ${response.data}`);
    } catch (err) {
      setError(err.response ? err.response.data : 'Error fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      {weather && <p className="weather-description">{weather}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
