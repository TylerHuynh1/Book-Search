import { useState } from "react";

import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  //event handler for any change that is made to update our title piece of state
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //event handler for whenever user submits a form
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle(""); //forces the value to be empty after a submission (so user does have to delete text from search bar after every search)
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
