import React from 'react';

const WeatherDescription = ({ description, iconId }) => {
  return (
    <div className="weather-description">
      <p>Weather: {description}</p>
      {iconId && (
        <img
          src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
          alt="Weather Icon"
        />
      )}
    </div>
  );
};

export default WeatherDescription;
