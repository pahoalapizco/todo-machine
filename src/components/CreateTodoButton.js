import '../styles/CreateTodoButton.css';

export const CreateTodoButton = ({ setOpenModal }) => {
  const onAddNewTodo = () => {
    setOpenModal(prevState => !prevState);
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