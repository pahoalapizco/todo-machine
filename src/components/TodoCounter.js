import '../styles/TodoCounter.css';

export const TodoCounter = ({ total, completed }) => {
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