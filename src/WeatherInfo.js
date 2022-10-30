import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";


export default function WeatherInfo (props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize condition">{props.data.condition}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt="{props.data.condition}" />
          <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°F</span>
        </div>
        <div className="col-6 humidity-temperature">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}