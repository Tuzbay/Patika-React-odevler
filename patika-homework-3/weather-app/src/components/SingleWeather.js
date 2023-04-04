import React from "react";
import "../App.scss";

function SingleWeather({ item }) {
  const event = new Date(
    Date.UTC(
      item.dt_txt.slice(0, -15),
      item.dt_txt.slice(5, -12) - 1,
      item.dt_txt.slice(8, -9)
    )
  );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="main">
      <p className="day">
        {event.toLocaleDateString("en-EN", options).slice(0, -15)}
      </p>
      <p className="temp">
        <span> {item.main.temp.toFixed(0)}°C</span>
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        alt="icon"
      />
      <p className="description">{item.weather[0].description}</p>
    </div>
  );
}

export default SingleWeather;
