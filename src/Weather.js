import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather () {
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
        <h1> Dallas</h1>
        <ul>
          <li>Wednesday 01:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            <span className="temperature">100</span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 40%</li>
              <li>Wind: 7mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}