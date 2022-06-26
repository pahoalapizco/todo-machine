import { Checkbox } from './Checkbox';

import '../styles/TodoItem.css';

export const TodoItem = ({ todoId, text, completed, deleteTodo, completeTodo, setOpenModal, setTodo }) => {

  const onEditTodo = () => {    
    setTodo({ id: todoId, text, });
    setOpenModal(prevState => !prevState);
  }

  return (
    <li 
      className="TodoItem"
    >
      <Checkbox id={todoId} completed={completed} completeTodo={completeTodo}/>
      <p 
        className={`TodoItem-text ${completed && "TodoItem-text--completed"}`} 
        onClick={onEditTodo}
      >
      { text }
      </p>

      <span 
        className="TodoItem-delete"
        onClick={() => deleteTodo(todoId)}
      > 
        X 
      </span>
    </li>
  );
}