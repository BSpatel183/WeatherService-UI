import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDescription from '../components/WeatherDescription';

describe('WeatherDescription', () => {
  it('should render weather description correctly', () => {
    render(<WeatherDescription description="Sunny" iconId="01d" />);
    expect(screen.getByText(/Weather: Sunny/i)).toBeInTheDocument();
  });

  it('should render weather icon when iconId is provided', () => {
    render(<WeatherDescription description="Sunny" iconId="01d" />);
    const img = screen.getByAltText(/Weather Icon/i);
    expect(img).toHaveAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png');
  });

  it('should not render an image if iconId is not provided', () => {
    render(<WeatherDescription description="Sunny" />);
    const img = screen.queryByAltText(/Weather Icon/i);
    expect(img).toBeNull();
  });
});
