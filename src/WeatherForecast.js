import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <div className="WeatherForecast-icon">
              <img src={props.data.icon} alt="{props.data.condition}" size={10} />
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-high">19° </span>
              <span className="WeatherForecast-low"> |10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}