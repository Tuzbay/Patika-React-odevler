import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookDetail({ setOpen }) {
  const { bookData } = useContext(BookContext);
  return (
    <div className="wrapper">
      {bookData.map((book) => (
        <div className="bookDetail">
          <span className="close" onClick={() => setOpen(false)}>
            X
          </span>

          <div className="bookdetail">
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo?.imageLinks.thumbnail
              }
              alt="bookName"
            />
            <div className="info">
              <span>Published Date: {book.volumeInfo.publishedDate}</span>
              <span>Book's Name: {book.volumeInfo.title}</span>
              <span>
                {book.volumeInfo.authors?.slice(0, 1).map((author) => (
                  <p>{author}</p>
                ))}
              </span>
            </div>
          </div>
          <span className="desc">{book.volumeInfo.description}</span>
        </div>
      ))}
    </div>
  );
}

export default BookDetail;
