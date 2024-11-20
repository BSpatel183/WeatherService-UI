import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'Api-key-1'; // Hardcoded API key

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setWeatherDescription('');
    setLoading(true);

    if (!city || !country) {
      setErrorMessage('Please provide both city and country.');
      setLoading(false);
      return;
    }

    try {
      // Make a request to your backend API
      const response = await axios.get(`https://localhost:7032/api/weather`, {
        params: {
          city,
          country,
          apiKey,
        },
      });

      // Update the state with weather data
      setWeatherDescription(response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        setErrorMessage(error.response.data); // Error message from backend (e.g., rate limit exceeded)
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather Information</h1>
      <form onSubmit={handleSubmit} className="weather-form">
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country"
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>

      {/* Display weather description */}
      {weatherDescription && <p className="weather-description">Weather: {weatherDescription}</p>}

      {/* Display error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default App;
