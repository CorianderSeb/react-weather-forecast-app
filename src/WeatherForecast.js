import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
setForecastReady(false);
    }, [props.data.city]);

    function handleResponse (response) {
    setForecast(response.data.daily);
    setForecastReady(true);
    }

    if (forecastReady) {
        console.log(forecast)
return (
  <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function(dailyforecast,index){
            if (index < 6){
        return (
            <div className="col">
                <WeatherForecastDay data={dailyforecast} />
            </div>
        ); 
            }   
        })}
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