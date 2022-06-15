import { Checkbox } from './Checkbox';

import '../styles/TodoItem.css';

export const TodoItem = ({ todoId, text, completed }) => {
  const onCompleted = () => {
    console.log(`Task ${text} completed`);
  }
  const onDelete = () => {
    console.log(`Task ${text} deleted`);
  }

  return (
    <li className="TodoItem">
      <Checkbox id={todoId} completed={completed} onCompleted={onCompleted}/>
      <p className={`TodoItem-text ${completed && "TodoItem-text--completed"}`}>
      { text }
      </p>

      <span 
        className="TodoItem-delete"
        onClick={onDelete}
      > 
        X 
      </span>
    </li>
  );
}