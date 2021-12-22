import React, { useState } from "react";
import "./css/Todo.css";
import "./css/Weather.css";
const api = {
  key: "15b2fe206f3f7f6f5d24eeee0b29724d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <div className='container'>
      <div className='page-wrap'>
        <div
          className={
            typeof weather.main != "undefined"
              ? weather.main.temp > 16
                ? "weather warm"
                : "weather"
              : "weather"
          }
        >
          <div>
            <input
              type='text'
              className='todo-input'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              placeholder='Search...'
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <p className='weather--medium'>
                {weather.name} {weather.sys.country}
              </p>
              <p className='weather--large'>{Math.round(weather.main.temp)}C</p>
              <p>
                <span className='weather--small'>
                  MAX : {Math.round(weather.main.temp_max)}C{" "}
                </span>
                /
                <span className='weather--small'>
                  {" "}
                  MIN :{Math.round(weather.main.temp_min)}C
                </span>
              </p>
              <p className='weather--medium'>{weather.weather[0].main}</p>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
