import React from "react";

function Header() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();

  let day = date.getDate();

  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return (
    <div className="header">
      <h1>Todo List </h1>
      <br />
      <h3>...Ece Nur Firdevs Kolukısa...</h3>
      <h3>...Tunay Uzbay Yelce...</h3>
      <h3>
        {day < 10 ? "0" + day : day} {month} {year}
      </h3>
    </div>
  );
}

export default Header;
