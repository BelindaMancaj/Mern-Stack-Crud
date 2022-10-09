import React, { useEffect, useState } from "react";
import Axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/api/getBooks").then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <div>
      {books.map((book) => {
        return (
          <div className="book-container">
            <div className="title">{book.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
