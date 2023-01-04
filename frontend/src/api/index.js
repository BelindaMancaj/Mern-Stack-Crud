import Axios from "axios";

export const fetchBooks = () => Axios.get("http://localhost:8000/api/getBooks");
export const createBook = (newBook) =>
  Axios.post("http://localhost:8000/api/addBook", newBook);
