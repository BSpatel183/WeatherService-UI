import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

// Mock axios
jest.mock('axios');

describe('App', () => {
  it('should render form, description, and error message correctly', async () => {
    const mockWeatherResponse = {
      description: 'Sunny',
      iconId: '01d',
    };
    axios.get.mockResolvedValueOnce({ data: mockWeatherResponse });

    render(<App />);

    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: 'Melbourne' } });
    fireEvent.change(screen.getByLabelText(/Country:/i), { target: { value: 'Australia' } });
    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => screen.getByText(/Weather: Sunny/i));

    expect(screen.getByText(/Weather: Sunny/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Weather Icon/i)).toHaveAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png');
  });

  it('should show error message when city or country is missing', async () => {
    render(<App />);

    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => screen.getByText(/Please provide both city and country/i));

    expect(screen.getByText(/Please provide both city and country/i)).toBeInTheDocument();
  });

  it('should show loading text when request is being processed', async () => {
    axios.get.mockResolvedValueOnce({ data: { description: 'Sunny', iconId: '01d' } });

    render(<App />);

    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: 'Melbourne' } });
    fireEvent.change(screen.getByLabelText(/Country:/i), { target: { value: 'Australia' } });
    fireEvent.click(screen.getByText(/Get Weather/i));

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should show error message when the API request fails', async () => {
    // Simulate API failure by mocking axios to reject
    axios.get.mockRejectedValueOnce({
      response: { data: 'Unable to fetch weather data' },
    });

    render(<App />);

    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: 'Melbourne' } });
    fireEvent.change(screen.getByLabelText(/Country:/i), { target: { value: 'Australia' } });
    fireEvent.click(screen.getByText(/Get Weather/i));

    await waitFor(() => screen.getByText(/Unable to fetch weather data/i));

    expect(screen.getByText(/Unable to fetch weather data/i)).toBeInTheDocument();
  });
});
