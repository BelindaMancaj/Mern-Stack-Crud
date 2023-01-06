import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Books.scss";
import UpdateBook from "./UpdateBook";

const Books = () => {
  const myBooks = useSelector((state) => state.books);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookId, setBookId] = useState(0);

  //isModalOpen should be an array of boolean, to fix the multiple modal openings
  //Look into it in the UpdateBook Componente as well
  //For more info check the stack overflow answer bookmarked in the browser
  //Try putting the modal in this comonent and only the form component in the UpdatedBooks file
  const onEditClick = (id) => {
    setBookId(id);
    setIsModalOpen(true);
  };
  console.log(bookId);
  return (
    <div className="all-container">
      {myBooks.map((book) => {
        return (
          <div className="book-container" key={book._id}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="genre">Genre: {book.genre}</div>
            <div className="pages">Number of pages: {book.pages}</div>
            <div className="price">{`Price: ${book.price} $ `}</div>

            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => onEditClick(book._id)}
              >
                Edit
              </button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        );
      })}
      <UpdateBook
        id={bookId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Books;
