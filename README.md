# Weather Service UI

This project is a React-based frontend application designed to interact with a backend Weather Service API. It allows users to fetch and display weather information for a specified city and country. The app provides a clean and user-friendly interface, modular components, and robust error handling.


## Features

- **Search Weather**: Users can input a city and country to fetch real-time weather information.
- **Weather Details Display**: Shows a description of the current weather along with an icon.
- **Error Handling**: Displays appropriate error messages for invalid input or backend issues.
- **Reusable Components**: Modular and reusable React components for scalability and maintainability.



## Tech Stack

- **Frontend**: React (JavaScript)
- **Styling**: CSS
- **HTTP Requests**: Axios
- **Backend API**: Communicates with a backend Weather API.



## Installation

### Prerequisites
- Node.js and npm should be installed on your machine.

### Steps to Install

1. Clone the repository:
```
- git clone https://github.com/BSpatel183/WeatherService-UI.git
```

3. Navigate to the project directory:
```
cd WeatherService-UI
```
4. Install dependencies:
```
npm install
```
5. Add .env file inside the weatherservice-ui with content below:
```
REACT_APP_API_URL=https://localhost:7032 [Add URL on which your backend app is running]
REACT_APP_API_KEY="Api-key-1"

```

## Usage

1. Start the development server:
```npm start```
2. Open the app:
```http://localhost:3000```
3. Fetch Weather:
   - Enter a city and country in the form, then click **Get Weather** to fetch and display weather details.



## Project Structure
 ```bash
weather-service-ui/
├── src/
│   ├── components/
│   │   ├── WeatherForm.js          # Form component for input
│   │   ├── WeatherDescription.js   # Component to display weather details
│   │   ├── ErrorMessage.js         # Component to show error messages
│   ├── App.js                      # Main application component
│   ├── App.css                     # Styling for the app
│   ├── index.js                    # Entry point for the React app
├── public/
│   └── index.html                  # Main HTML file
├── README.md                       # Project documentation
└── package.json                    # Project dependencies and scripts
```




## API Integration


### Request Parameters:
- `city`: Name of the city (string).
- `country`: Name of the country (string).

### Response Model:
The backend API returns the following structure:
```json
{
  "description": "Clear sky",
  "iconId": "01d"
}
```
### Example Workflow:
1. Enter the name of a city (e.g., Melbourne).
2. Enter the name of a country (e.g., Australia).
3. Click Get Weather.
4. View the weather description and icon for the entered location.
5. If there’s an error (e.g., invalid input or server issue), an error message will be displayed.

### Acknowledgments:
* React - A JavaScript library for building user interfaces.
* Axios - For making API requests.
* OpenWeatherMap - Source of weather icons and data structure inspiration.

### Demo Web page
![image](https://github.com/user-attachments/assets/f03d6e9d-32de-46e9-b77d-10d0e29f1e02)
