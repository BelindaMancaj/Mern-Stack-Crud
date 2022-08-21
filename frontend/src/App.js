import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import BooksContainer from './components/BooksContainer';
import {getBooks} from './actions'


function App() {

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  },[dispatch])

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<BooksContainer/>} />
      <Route path="books" element={<BooksContainer/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
