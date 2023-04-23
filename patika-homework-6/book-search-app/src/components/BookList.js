import { useContext } from "react";
import Book from "./Book";
import BookContext from "../context/BookContext";

function BookList() {
  const { bookData } = useContext(BookContext);

  return (
    <div className="booklist">
      {bookData.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
