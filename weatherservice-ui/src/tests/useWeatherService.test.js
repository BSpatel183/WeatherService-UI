import { renderHook, act } from '@testing-library/react-hooks';
import { useWeatherService } from '../hooks/useWeatherService';
import axios from 'axios';
// Mock axios
jest.mock('axios');

describe('useWeatherService', () => {
  it('should fetch weather data successfully', async () => {
    const mockResponse = {
      data: { description: 'Sunny', iconId: '01d' },
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    const { result, waitForNextUpdate } = renderHook(() => useWeatherService());

    act(() => {
      result.current.fetchWeather('Melbourne', 'Australia');
    });

    await waitForNextUpdate();

    expect(result.current.weatherResponse).toEqual(mockResponse.data);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.errorMessage).toBe('');
  });

  it('should set an error message if API request fails', async () => {
    axios.get.mockRejectedValueOnce({ response: { data: 'API Error' } });

    const { result, waitForNextUpdate } = renderHook(() => useWeatherService());

    act(() => {
      result.current.fetchWeather('Melbourne', 'Australia');
    });

    await waitForNextUpdate();

    expect(result.current.errorMessage).toBe('API Error');
    expect(result.current.weatherResponse).toBeNull();
    expect(result.current.loading).toBeFalsy();
  });

  it('should set an error message if city or country is not provided', async () => {
    const { result } = renderHook(() => useWeatherService());

    act(() => {
      result.current.fetchWeather('', 'Australia');
    });

    expect(result.current.errorMessage).toBe('Please provide both city and country.');
    expect(result.current.weatherResponse).toBeNull();
    expect(result.current.loading).toBeFalsy();
  });
});
