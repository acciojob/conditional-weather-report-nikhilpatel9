import React from "react";

const WeatherDisplay = ({ weather }) => {
  const isHot = weather.temperature > 20;
  const tempColor = { color: isHot ? "red" : "blue" };

  return (
    <div>
      <p>Conditions: {weather.conditions}</p>
      <p data-testid="temperature">
        Temperature: <span style={tempColor}>{weather.temperature}°C</span>
      </p>
    </div>
  );
};

export default WeatherDisplay;