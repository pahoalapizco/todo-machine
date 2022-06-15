import '../styles/TodoCounter.css';

export const TodoCounter = ({ percent }) => {
  return (
    <div className="TodoCounter--progressbar">
      <span className="progressbar"> 50% </span>
    </div>
  );
}