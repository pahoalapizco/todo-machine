import { Checkbox } from './Checkbox';

import '../styles/TodoItem.css';

export const TodoItem = ({ todoId, text, completed }) => {
  return (
    <li className="TodoItem">
      <Checkbox id={todoId} completed={completed} />
      <p className={`TodoItem-text ${completed && "TodoItem-text--completed"}`}>
      { text }
      </p>

      <span className="TodoItem-delete"> X </span>
    </li>
  );
}