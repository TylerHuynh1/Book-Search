import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const App = () => {
  // Pull fetch books out of app to be used in the provider
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
