import React, { useState, useEffect } from "react";
import Weather from './Weather';
import 'weather-icons/css/weather-icons.css'

import "./App.css";

const API_KEY = "6a1daa0a63cd6efd9a60e6056c9858ae";

const App = () => {
  const [city, setCity] = useState();

  useEffect(() => {
    const APIdata = fetch(
      `https:/api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  });

  return (
    <>
    <div className="App-header">
    <h1>Weather App</h1>
    <div className="forms">

      <form >
        <input type="text" placeholder="Enter City"/>
        <input type="text" placeholder="Enter City"/>
        <button className="btn">
            search
          </button>
      </form>
    </div>
    <Weather/>
    </div>
  

    </>
  );
};

export default App;
