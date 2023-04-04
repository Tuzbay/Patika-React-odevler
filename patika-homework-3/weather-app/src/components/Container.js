import React, { useContext, useState } from "react";
import "../App.scss";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import WeatherList from "./WeatherList";
import ThemeContext from "../context/ThemeContext";
import WeatherData from "../context/WeatherData";

function Container() {
  const { theme } = useContext(ThemeContext);
  const { setCity } = useContext(WeatherData);
  const [input, setInput] = useState("");

  const searchLocation = (e) => {
    e.preventDefault();
    setCity(input);
    setInput("");
  };

  return (
    <div className={`container ${theme === "dark" ? theme : ""}`}>
      <Header />
      <div className="app">
        <form onSubmit={searchLocation}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <h2
          style={{ textAlign: "center", marginTop: "0", marginBottom: "14px" }}
        >
          Current
        </h2>

        <CurrentWeather />
        <WeatherList />
      </div>
    </div>
  );
}

export default Container;
