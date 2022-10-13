import React from "react";
import "./Weather.css";


export default function Weather () {
    return (
      <div className="Weather">
          <h1> Dallas</h1>
          <ul>
            <li>Wednesday 01:00</li>
            <li>Sunny</li>
          </ul>
          <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 0%
                    </li>
                    <li>
                        Humidity: 40%
                    </li>
                    <li>
                        Wind: 7mph
                    </li>
                </ul>
            </div>
          </div>
        </div>
    );
}