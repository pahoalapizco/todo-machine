import { Checkbox } from './components/Checkbox';

import './styles/TodoItem.css';

export const TodoItem = ({ todoId, text, completed }) => {
  return (
    <li className="TodoItem">
      <Checkbox id={todoId}/>
      <p className={`TodoItem-text ${completed && "TodoItem-text--completed"}`}>
      { text }
      </p>

      <span className="TodoItem-delete"> X </span>
    </li>
  );
}