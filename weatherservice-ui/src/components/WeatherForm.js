import React, { useState } from 'react';

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleFormSubmit = (e) => {
    onSubmit(e, city, country);
  };

  return (
    <form onSubmit={handleFormSubmit} className="weather-form">
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

export default WeatherForm;
