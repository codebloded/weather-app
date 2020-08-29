import React, { useState, useEffect } from "react";
import Weather from './Weather';
import 'weather-icons/css/weather-icons.css'


import "./App.css";

const API_KEY = "7b2c122e394bea992e54a4df75c1490d";

const App = () => {
  const [city, setCity] = useState('Delhi');
  const [country, setCountry] = useState('India');
  const [updatedLoc, setUpdateLoc] = useState({ cityx: city, countryx: country });
  const [maxTemp, setMaxTemp] = useState("Max");
  const [minTemp, setMinTemp] = useState("Min");
  const [dec, setDec] = useState();
  const [Temp, setTemp] = useState();
  const [weather, setWeather] = useState({
    Thunderstorm: 'wi wi-thunderstorm',
    Drizzle: 'wi wi-sleet',
    Rain: 'wi wi-storm-showers',
    Snow: "wi wi-snow",
    Atmosphere: "wi wi-fog",
    Clear: 'wi wi-day-sunny',
    Clouds: "wi wi-day-fog"
    
  });
  const [icons, setIcons] = useState()


  useEffect(() => {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city, country}&appid=${API_KEY}`)
      .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data)
        console.log(data.main.temp);
        setTemp(Math.floor(data.main.temp-237.15));
        setMaxTemp(Math.floor(data.main.temp_max-273.15));
        setMinTemp(Math.floor(data.main.temp_min - 273.15));
        setDec(data.weather[0].description)
        const getIcon = () => {

          switch (true) {
            case data.weather[0].main === "Clouds":
              setIcons(weather.Clouds);
              break;

            case data.weather[0].main === "Thunderstorm":
              setIcons(weather.Thunderstorm);
              break;
            case data.weather[0].main === "Drizzle":
              setIcons(weather.Drizzle);
              break;
            case data.weather[0].main === "Rain":
              setIcons(weather.Rain);
              break;
            case data.weather[0].main === "Snow":
              setIcons(weather.Snow);
              break;
            case data.weather[0].main === "Atmosphere":
              setIcons(weather.Atmosphere);
              break;
            case data.weather[0].main === "Clear":
              setIcons(weather.Clear);
              break;
            default:
              setIcons(weather.Clouds);
              break;

          }
          console.log(data.weather[0].main);
        }
        getIcon();




      })


  }, [updatedLoc]);

  const cityHandler = (e) => {
    setCity(e.target.value);
  }
  const countryHandler = (e) => {
    setCountry(e.target.value);
  }


  return (
    <>
      <div className="App-header">
        <h1>Weather App</h1>
        <div className="forms">

          <form onSubmit={(e) => {
            e.preventDefault();
          }}>


            <input type="text" placeholder="Enter country" onChange={countryHandler} value={country} defaultValue='' />
            <input type="text" placeholder="Enter City" onChange={cityHandler} value={city} defaultValue='' />
            <button onClick={(e) => {

              setUpdateLoc({ cityx: city, countryx: country });



            }} className="btn">
              search
          </button>
          </form>
        </div>
        <Weather name1={updatedLoc.cityx} name2={updatedLoc.countryx} weatherx={icons} temp={{ x: Temp, y: maxTemp, z: minTemp, m: dec }} />
            <span>Developer|codebloded</span>
      </div>
          
    </>
  );
};

export default App;
