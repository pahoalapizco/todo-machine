import { useContext } from "react";
import { TodoContext } from "./../context/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "./TodoForm";
import { Loader } from "../components/Loader";
import { Empty } from "../components/Empty";
import { Error } from "../components/Error";

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
    setTodo,
  } =  useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {loading && <Loader />}
      {error && !loading && <Error /> }
      {!loading && !error && !searchedTodos.length && <Empty /> }
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            setOpenModal={setOpenModal}
            setTodo={setTodo}
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
