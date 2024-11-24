import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render the error message when the message prop is provided', () => {
    render(<ErrorMessage message="An error occurred!" />);
    expect(screen.getByText(/An error occurred!/i)).toBeInTheDocument();
  });

  it('should not render anything when the message prop is empty', () => {
    render(<ErrorMessage message="" />);
    expect(screen.queryByText(/An error occurred!/i)).toBeNull();
  });
});
