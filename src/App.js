import React, { useState} from "react";
import bootstrap from "bootstrap";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "container">
      <header className="App-header">
      <h1>
        Weather App</h1> 
      <Weather />
      </header>
      <footer>This project was coded by <a href="https://www.sebastiancseithel.com" target="_blank" rel="noopener nonreferrer">Sebastian Cory Seithel</a> and is open sourced on <a href="">GitHub</a>. </footer>
    </div>
    </div>
  );
}

export default App;
