import React from "react";
import "./Book.scss";

const Book = ({ title, author, genre, pages, price }) => {
  return (
    <div className="book">
      <div className="book-info">
        <p>{`Title:  ${title}`}</p>
        <p>{`Author:  ${author}`}</p>
        <p>{`Genre:  ${genre}`}</p>
        <p>{`Pages:  ${pages}`}</p>
        <p>{`Price:  ${price}`}</p>
      </div>
      <div className="actions">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Book;
