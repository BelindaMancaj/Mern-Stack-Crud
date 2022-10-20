import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import Book from "./Book";
import "./BooksContainer.scss";

const booksArray = [
  {
    title: "dsfsdf",
    author: "Aojjj",
    genre: "Drdsfs",
    pages: 300,
    price: 20,
  },
  {
    title: "dsfsdf",
    author: "Aojjj",
    genre: "Drdsfs",
    pages: 300,
    price: 20,
  },
  {
    title: "dsfsdf",
    author: "Aojjj",
    genre: "Drdsfs",
    pages: 300,
    price: 20,
  },
  {
    title: "dsfsdf",
    author: "Aojjj",
    genre: "Drdsfs",
    pages: 300,
    price: 20,
  },
  {
    title: "dsfsdf",
    author: "Aojjj",
    genre: "Drdsfs",
    pages: 300,
    price: 20,
  },
];

const BooksContainer = () => {
  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="all-books-container">
        {booksArray.map((book) => {
          return (
            <>
              <Book
                title={book.title}
                author={book.author}
                genre={book.genre}
                pages={book.pages}
                price={book.price}
              />
            </>
          );
        })}
      </div>
      {show ? <AddBookForm /> : ""}
      {show ? (
        <button className="hide" onClick={showForm}>
          Hide
        </button>
      ) : (
        <button className="add-book" onClick={showForm}>
          Add new book +
        </button>
      )}
    </>
  );
};

export default BooksContainer;
