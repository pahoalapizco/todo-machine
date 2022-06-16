// context
import { useState, useContext } from 'react';
import { TodoContext } from './../context/TodoContext';
import '../styles/TodoForm.css';

export const TodoForm = ({ setOpenModal }) => {
  const [text, setText] = useState("");

  const {
    createTodo,
  } = useContext(TodoContext);

  const onCancelTodo = () => {
    setOpenModal(false);
  }
  
  const onSubmitTodo = (event) => {
    event.preventDefault();
    createTodo(text);
    setOpenModal(false);
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitTodo}>
      <label htmlFor="create-todo"> Create new ToDo</label>
      <textarea 
        className="TodoText" 
        id="create-todo" 
        rows={4} 
        cols={50}
        placeholder="Type your Todo here..."
        value={text}
        onChange={onTextChange}
      >        
      </textarea>

      <div className="button-container">
        <button
          type="button"
          className="form-button cancel-btn" 
          onClick={onCancelTodo}
        >
          Cancel 
        </button>
        <button
          type="submit"
          className="form-button create-btn"
        >
          Create 
        </button>
      </div>
    </form>
  )
}