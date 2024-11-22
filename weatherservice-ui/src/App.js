import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDescription from './components/WeatherDescription';
import ErrorMessage from './components/ErrorMessage';
import { useWeatherService } from './hooks/useWeatherService';
import './App.css';

function App() {
  const { fetchWeather, weatherResponse, errorMessage, loading } = useWeatherService();

  return (
    <div className="app-container">
      <h1>Weather Information</h1>
      <WeatherForm onSubmit={fetchWeather} />
      {loading && <p>Loading...</p>}
      {weatherResponse && (
        <WeatherDescription
          description={weatherResponse.description}
          iconId={weatherResponse.iconId}
        />
      )}
      {/* Show error message if present */}
      <ErrorMessage message={errorMessage} />
    </div>
  );
}

export default App;
