import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDescription from './components/WeatherDescription';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [weatherResponse, setWeatherResponse] = useState(null); // Holds the response data
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'Api-key-1'; // Hardcoded API key

  // Handle the form submission
  const handleSubmit = async (e, city, country) => {
    e.preventDefault();
    setErrorMessage('');
    setWeatherResponse(null);
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
      setWeatherResponse(response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        setErrorMessage(error.response.data); // Error message from backend
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
      <WeatherForm onSubmit={handleSubmit} />
      {weatherResponse && (
        <WeatherDescription
          description={weatherResponse.description}
          iconId={weatherResponse.iconId}
        />
      )}
      <ErrorMessage message={errorMessage} />
    </div>
  );
}

export default App;
