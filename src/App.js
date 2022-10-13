import React from "react";
import bootstrap from "bootstrap";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <div><Weather city="Dallas"/></div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://sebastiancseithel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sebastian Cory Seithel
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/CorianderSeb/react-weather-forecast-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
