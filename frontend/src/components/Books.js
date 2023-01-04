import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Books.scss";
import Axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  // const books = [
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  //   {
  //     title: "sfd",
  //     author: "sdsf",
  //     genre: "oooo",
  //     pages: 23,
  //     price: 555,
  //   },
  // ];

  const myBooks = useSelector((state) => state.books);
  console.log("My books", myBooks);
  // console.log("My Books", myBooks);
  // useEffect(() => {
  //   Axios.get("http://localhost:8000/api/getBooks").then((response) => {
  //     setBooks(response.data);
  //   });
  // }, []);
  // console.log(books);
  return (
    <div className="all-container">
      {myBooks.map((book) => {
        return (
          <div className="book-container">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="genre">Genre: {book.genre}</div>
            <div className="pages">Number of pages: {book.pages}</div>
            <div className="price">{`Price: ${book.price} $ `}</div>

            <div className="actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
