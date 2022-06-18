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
    <section className="TodoCounter-container">
      <div className="TodoCounter--title">
        <h1 className="title"> Hey <br /> There! </h1>
        <p> Welcome to your favorite TODO app </p>
      </div>
      <div className="TodoCounter--progressbar">
        <span className="progressbar" style={progress}> {percent} </span>
      </div>
      <p className="TodoCounter-text"> You have {completed} compleated of {total} tasks. </p>
    </section>
  );
}