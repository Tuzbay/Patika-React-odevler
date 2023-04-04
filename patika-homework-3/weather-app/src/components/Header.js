import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThemeContext from "../context/ThemeContext";
import "../App.scss";
import WeatherData from "../context/WeatherData";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setCity } = useContext(WeatherData);

  const cities = [
    "İstanbul",
    "Paris",
    "Londra",
    "New York",
    "Amsterdam",
    "Madrid",
    "Berlin",
    "Ankara",
  ];

  return (
    <div className="header">
      <ul className="recommend-list">
        {cities.map((city) => {
          return <li onClick={() => setCity(city)}>{city}</li>;
        })}
      </ul>

      {theme === "light" ? (
        <LightModeIcon
          className="icon light"
          onClick={(e) => setTheme("dark")}
        />
      ) : (
        <DarkModeIcon className="icon" onClick={(e) => setTheme("light")} />
      )}
    </div>
  );
}

export default Header;
