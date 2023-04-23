import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/general.scss";
import BookList from "./components/BookList";
// import { useState } from "react";
import { BookProvider } from "./context/BookContext";

function App() {
  // const [bookData, setBookData] = useState([]);
  return (
    <BookProvider>
      <div className="app">
        <Header />
        <BookList />
        <Footer />
      </div>
    </BookProvider>
  );
}

export default App;
