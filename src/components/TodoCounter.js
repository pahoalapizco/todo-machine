import '../styles/TodoCounter.css';

export const TodoCounter = ({ totalItems, totalCompleatedItems }) => {
  const progress = {
    width: '0%',
  }
  let percent = '';

  if(totalItems > 0 && totalCompleatedItems > 0) {
    percent = `${Math.floor((totalCompleatedItems * 100) / totalItems)}%`;
    progress.width = percent;
  }

  return (
    <div className="TodoCounter--progressbar">
      <span className="progressbar" style={progress}> {percent} </span>
    </div>
  );
}