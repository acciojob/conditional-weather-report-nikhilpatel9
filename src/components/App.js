
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather ={ temperature: 25, conditions: "Sunny" };
  const isHot=weather.temperature>20;
  const tempColor= { color: isHot ? "red" : "blue" };
  return (
    <div>
        <p style={tempColor}>{weather.temperature}</p>
        <span style={tempColor}>{weather.conditions}</span>
    </div>
  )
}

export default App
