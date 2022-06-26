// context
import { useState, useContext } from 'react';
import { TodoContext } from './../context/TodoContext';
import '../styles/TodoForm.css';

export const TodoForm = ({ setOpenModal, item }) => {
  const {
    createTodo,
    editTodo,
    todo,
    setTodo,
  } = useContext(TodoContext);

  const title = todo ? "Edit" : "Create new";
  const txt = todo ? todo.text : "";
  const [text, setText] = useState(txt);
  const [disableCreate, setDisableCreate] = useState(false);

  const onCancelTodo = () => {
    setTodo(null);
    setOpenModal(false);
  }
  
  const onSubmitTodo = (event) => {
    event.preventDefault();
    if(!todo) {
      createTodo(text);
    } else {
      editTodo({
        ...todo,
        text,
      });
    }

    setOpenModal(false);
  }

  const onTextChange = (event) => {
    setText(event.target.value);
    setDisableCreate(!!event.target.value.length);
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitTodo}>
      <label htmlFor="create-todo"> {title} ToDo</label>
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
          disabled={!disableCreate}
        >
          Save 
        </button>
      </div>
    </form>
  )
}