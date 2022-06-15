import '../styles/TodoList.css';

export const TodoList = (props) => {
  return (
    <ul className="TodoList-container">
      {props.children}
    </ul>
  );
}