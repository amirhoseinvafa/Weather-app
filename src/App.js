import { useEffect } from "react";
import "weather-icons/css/weather-icons.css";

import "./App.css";
import Weather from "./view/WeatherApp";

const API_KEY = "1d6f5b6bf565fee9388b514ea5ffae55";

function App() {
  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);
  };
  return (
    <div className="App">
      <div>
        <Weather />
      </div>
    </div>
  );
}

export default App;
