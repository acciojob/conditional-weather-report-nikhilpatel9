
import React from "react";
import './../styles/App.css';

const App = () => {
 
  const weather = { temperature: 25, conditions: "Sunny" };
  const isHot = weather.temperature > 20;
  const tempColor = { color: isHot ? "red" : "blue" };

  return (
    <div>
      <p style={tempColor}>Conditions: {weather.conditions}</p>
      <p data-testid="temperature">
        Temperature: <span style={tempColor}>{weather.temperature}°C</span>
      </p>
    </div>
  );

}

export default App
