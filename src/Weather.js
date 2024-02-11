import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <h1 className="current-city">Paris</h1>
        <p className="current-details">
          Saturday 15:32, moderate rain <br />
          Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
        </p>
      </div>
      <div className="current-temperature">
        <span className="current-temperature-icon">☀️</span>
        <span className="current-temperature-value">24</span>
        <span className="current-temperature-unit">°C</span>
      </div>
    </div>
  );
}
