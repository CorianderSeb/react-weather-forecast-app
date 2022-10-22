import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather (props) {  
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
setWeatherData({
  ready: true,
  temperature: Math.round(response.data.temperature.current),
  wind: Math.round(response.data.wind.speed),
  humidity: response.data.temperature.humidity,
  condition: response.data.condition.description,
  icon: response.data.condition.icon_url,
  city: response.data.city,
  date: response.data.time
});
  }
    if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary submit-button w-100"
              />
            </div>
          </div>
        </form>
        <h1> {weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt="sunny"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">Condition: {weatherData.condition}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
    } else{
 const apiKey = "t10a43coc84b90fe66a71226d4056be3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
 axios.get(apiUrl).then(handleResponse);

 return "Loading..."
    }
}