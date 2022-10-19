import React from "react";
import Book from "./Book";
import "./BooksContainer.scss";

const BooksContainer = () => {
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
      <button>Add new book</button>
    </>
  );
};

export default BooksContainer;
