import { useState } from 'react';
import axios from 'axios';

export const useWeatherService = () => {
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city, country) => {
    setErrorMessage('');
    setWeatherResponse(null);
    setLoading(true);

    // Check if city or country is missing
    if (!city || !country) {
      setErrorMessage('Please provide both city and country.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/weather`,
        {
          params: {
            city,
            country,
            apiKey: process.env.REACT_APP_API_KEY,
          },
        }
      );

      setWeatherResponse(response.data);
    } catch (error) {
      setErrorMessage(
        error.response?.data || 'An error occurred. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return { fetchWeather, weatherResponse, errorMessage, loading };
};
