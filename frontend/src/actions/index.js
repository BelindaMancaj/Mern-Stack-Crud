import { fetchBooks } from "../api";

export const getBooks = () => async(dispatch) =>{
    try{
        const {data} = await fetchBooks.fetchPosts();
        dispatch({type: "GET_BOOKS", payload: data});
    }catch(error){
        console.log(error.message);
    }
}

export const addBook = (newBook) =>{
    return {
        type: "ADD_BOOK",
        payload: newBook,
    }
}

export const updateBook = (updatedBook) =>{
    return {
        type: "UPDATE_BOOK",
        payload: updatedBook
    }
}

export const deleteBook = (bookId) => {
    return {
        type:'DELETE',
        payload: bookId
    }
}