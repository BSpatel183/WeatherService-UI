import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherForm from '../components/WeatherForm';

describe('WeatherForm', () => {
  it('renders the form fields correctly', () => {
    render(<WeatherForm onSubmit={() => {}} />);

    // Check form elements are rendered
    expect(screen.getByLabelText(/City:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Weather/i)).toBeInTheDocument();
  });

  it('calls onSubmit with city and country when valid inputs are provided', () => {
    const mockOnSubmit = jest.fn();
    render(<WeatherForm onSubmit={mockOnSubmit} />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: 'Melbourne' } });
    fireEvent.change(screen.getByLabelText(/Country:/i), { target: { value: 'Australia' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Get Weather/i));

    // Assert that onSubmit was called with correct values
    expect(mockOnSubmit).toHaveBeenCalledWith('Melbourne', 'Australia');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('updates the city and country state as the user types', () => {
    const mockOnSubmit = jest.fn();
    render(<WeatherForm onSubmit={mockOnSubmit} />);

    // Type into the city input
    fireEvent.change(screen.getByLabelText(/City:/i), { target: { value: 'Sydney' } });
    expect(screen.getByLabelText(/City:/i)).toHaveValue('Sydney');

    // Type into the country input
    fireEvent.change(screen.getByLabelText(/Country:/i), { target: { value: 'Australia' } });
    expect(screen.getByLabelText(/Country:/i)).toHaveValue('Australia');
  });
});
