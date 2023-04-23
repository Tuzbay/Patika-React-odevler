import React, { useState } from "react";
import BookDetail from "./BookDetail";

function Book({ book }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="book">
        <img src={book.volumeInfo?.imageLinks.smallThumbnail} alt="bookName" />
        <div>
          <h4>{book.volumeInfo?.title}</h4>
          {book.volumeInfo.authors?.slice(0, 1).map((author) => (
            <p>{author}</p>
          ))}
        </div>
        <button onClick={() => setOpen(true)}>Details</button>
      </div>
      {open && <BookDetail setOpen={setOpen} />}
    </>
  );
}

export default Book;
