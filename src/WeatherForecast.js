import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
    setForecast(response.data.daily);
    setForecastReady(true);
    }

    if (forecastReady) {
        console.log(forecast)
return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <WeatherForecastDay data={forecast[0]} />
    </div>
  </div>
  </div>
);
    } else {
let apiKey = "t10a43coc84b90fe66a71226d4056be3";
let city = props.data.city;
let units = "imperial";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);
    }
    return null;
}