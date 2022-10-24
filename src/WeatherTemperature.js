import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit]= useState("farenheit");
    function convertToCelcius (event){
        event.preventDefault();
        setUnit("celcius");
        
    }

function showFarenheit (event){
    event.preventDefault ();
    setUnit("farenheit");
}


    if (unit === "farenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.farenheit}</span>
        <span className="unit">
          °F | <a href="/" onClick={convertToCelcius}>°C</a>{" "}
        </span>
      </div>
    );
}else{
    let celcius = Math.round((props.farenheit - 32) * 5 / 9);
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{celcius}</span>
        <span className="unit">
          <a href="/" onClick={showFarenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
    }
}