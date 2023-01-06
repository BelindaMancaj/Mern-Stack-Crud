import Axios from "axios";

export const fetchBooks = () => Axios.get("http://localhost:8000/api/getBooks");
export const createBook = (newBook) =>
  Axios.post("http://localhost:8000/api/addBook", newBook);
export const updateBook = (id, updatedBook) =>
  Axios.patch(`http://localhost:8000/api/${id}`, updatedBook);
