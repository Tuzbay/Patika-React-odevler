import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getBookData() {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDHslBQhaFqkatwdHzdYpZhaItktb4DFFo`
        );
        setBookData(data.items);
      } catch (err) {
        console.log(err);
      }
    }
    if (search !== "") {
      getBookData();
    }
  }, [search]);

  const values = {
    bookData,
    setBookData,
    search,
    setSearch,
  };

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export default BookContext;
