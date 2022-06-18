import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons'

// context
import { TodoContext } from '../context/TodoContext';

import '../styles/ToggleSearchTodo.css';

export const ToggleSearchTodo = () => {
  const { completedSearch, setCompletedSearch } = useContext(TodoContext);  
  const text = !completedSearch ? "Completed" : "All";
  const iconType = !completedSearch ? faSquareCheck : faSquare;

  const onCliclCompleted = () => {
    setCompletedSearch((prevState) => !prevState);
  }
  return (
    <p 
      className="ToggleSearch--toggle-filter"
      onClick={onCliclCompleted}
    >
        {text} tasks
        <span className="ToggleSearch--button">
          <FontAwesomeIcon icon={iconType} />
        </span>
      </p>
  );
}