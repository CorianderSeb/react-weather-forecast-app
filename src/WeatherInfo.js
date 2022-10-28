import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"


export default function WeatherInfo (props) {
  return (
      <div className="WeatherInfo">
        <h1> {props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={props.data.icon} alt="{props.data.condition}" size={50} />
            <WeatherTemperature farenheit={props.data.temperature} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}