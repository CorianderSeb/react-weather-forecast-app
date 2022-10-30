import React from "react";

export default function WeatherForecastDay (props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    };

    function minTemperature() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}°`;
    };

    function day (){
        let date = new Date(props.data.time*1000)
         let day = date.getDay();
         let days = [
           "Sun",
           "Mon",
           "Tue",
           "Wed",
           "Thu",
           "Fri",
           "Sat",
         ];

        return days[day];
    }

    return (
  <div className="WeatherForecastDay">
    <div className="WeatherForecast-day">{day()}</div>
    <div className="WeatherForecast-icon">
      <img
        src={props.data.condition.icon_url}
        alt="{props.data.condition}"
      />
    </div>
    <div className="WeatherForecast-temp">
      <span className="WeatherForecast-high">
        {maxTemperature()}{" "}
      </span>
      <span className="WeatherForecast-low">
        {" "}
        | {minTemperature()}
      </span>
    </div>
  </div>
);
}