import React, { useContext, useState } from "react";
import BookContext from "../context/BookContext";

function Header() {
  const [input, setInput] = useState("");
  const { setSearch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };

  return (
    <div className="header">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write book or author name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Header;
