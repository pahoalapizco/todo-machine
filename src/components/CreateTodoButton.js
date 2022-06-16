import '../styles/CreateTodoButton.css';

export const CreateTodoButton = () => {
  const onAddNewTodo = () => {
    console.log("Add new todo");
  }
  return (
    <button 
      className="CreateTodoButton"
      onClick={onAddNewTodo}
    >
      +
    </button>
  );
}