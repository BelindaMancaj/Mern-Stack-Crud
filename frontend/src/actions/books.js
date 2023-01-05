import * as api from "../api";

// Action creator
/**
 export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
 */

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateBook = (id, book) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, book);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
