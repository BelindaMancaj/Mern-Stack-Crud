import React from "react";

const Book = ({ title, author, genre, pages, price }) => {
  return (
    <div>
      <>
        <h4>{`Title:  ${title}`}</h4>
        <h4>{`Author:  ${author}`}</h4>
        <h4>{`Genre:  ${genre}`}</h4>
        <h4>{`Pages:  ${pages}`}</h4>
        <h4>{`Price:  ${price}`}</h4>
        <button>Edit</button>
        <button>Delete</button>
      </>
    </div>
  );
};

export default Book;
