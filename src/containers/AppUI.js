import { useContext } from "react";
import { TodoContext } from "./../context/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "./TodoForm";
import { Loader } from "../components/Loader";
// portal
import { Modal } from "./Modal";

export function AppUI() {
  const { 
    loading, 
    error, 
    searchedTodos, 
    deleteTodo, 
    completeTodo,
    openModal,
    setOpenModal,
  } =  useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <Loader />}
        {error && <p> Opp! We have an error... </p>}
        {!loading && !searchedTodos.length && <p> Create a new ToDo!! :D </p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>
      {
        openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal}/>
          </Modal>
        )
      }
      
    </>
  );
}
