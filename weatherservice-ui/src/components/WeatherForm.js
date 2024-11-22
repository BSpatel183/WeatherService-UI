import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior
    onSubmit(city, country); // Call onSubmit with city and country
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={handleCityChange}
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
          onChange={handleCountryChange}
          placeholder="Enter country"
          className="form-input"
        />
      </div>
      <button type="submit" className="submit-btn">
        Get Weather
      </button>
    </form>
  );
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WeatherForm;
