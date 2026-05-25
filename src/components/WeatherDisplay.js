import React from "react";

const WeatherDisplay = ({ weather }) => {
  const isHot = weather.temperature > 20;
  const tempColor = { color: isHot ? "red" : "blue" };

  return (
    <div>
        <p data-testid="temperature">
        Temperature: <span style={tempColor}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
     
    </div>
  );
};

export default WeatherDisplay;