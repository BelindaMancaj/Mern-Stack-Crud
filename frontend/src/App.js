import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.scss";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import { getBooks } from "./actions/books";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Books />
      <div className="footer">
        <AddBook />
      </div>
    </div>
  );
}

export default App;
