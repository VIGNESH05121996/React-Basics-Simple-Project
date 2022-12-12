import React, { useState } from "react";
import "./temperatureControl.css";

const TemperatureControl = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperatureValue = temperatureValue + 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    const newTemperatureValue = temperatureValue - 1;
    setTemperatureValue(newTemperatureValue);
    if (newTemperatureValue < 15) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="temp-whole-container">
      <div className="temperature-container">
        <div className={`display-degree ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        <div className="button-container">
          <button className="temp-button" onClick={() => increaseTemperature()}>+</button>
          <button className="temp-button" onClick={() => decreaseTemperature()}>-</button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureControl;
