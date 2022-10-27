import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";



export default function Weather (props) { 
  const [city, setCity] = useState(props.defaultCity);
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
  date: new Date(response.data.time *1000)
});
  }
  function search(){
 const apiKey = "t10a43coc84b90fe66a71226d4056be3";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
 axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit (event) {
    event.preventDefault();
    search();
  }
  function handleCityChange (event) {
setCity(event.target.value);
  }


    if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
                onChange= {handleCityChange}
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
        <WeatherInfo data={weatherData}/>
        <WeatherForecast data={weatherData}/>
        </div>
    );
    } else{
search();
 return "Loading..."
    }
}