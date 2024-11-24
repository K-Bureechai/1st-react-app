import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>May is awesome hehe</h1>
        <Weather city= "Bangkok" />
      </header>
    </div>
  );
}

export default App;
