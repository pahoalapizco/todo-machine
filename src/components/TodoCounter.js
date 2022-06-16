// context
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoCounter.css';

export const TodoCounter = () => {
  const { total, completed } = useContext(TodoContext);
  
  const progress = {
    width: '0%',
  }
  let percent = '';

  if(total > 0 && completed > 0) {
    percent = `${Math.floor((completed * 100) / total)}%`;
    progress.width = percent;
  }

  return (
    <div className="TodoCounter--progressbar">
      <span className="progressbar" style={progress}> {percent} </span>
    </div>
  );
}