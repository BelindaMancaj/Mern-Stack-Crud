export default (books = [], action) =>{
    switch(action.type){
        case 'GET_BOOKS':
            return action.payload;
        case 'ADD_BOOK':
            return [...books, action.payload];
        case 'DELETE_BOOK':
            return books;
        default:
            return books
    }
}