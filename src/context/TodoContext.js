import { useState, createContext } from "react";

// custom hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const {
    items: todos,
    saveItems: setTodos,
    loading,
    error
  } = useLocalStorage("TODOS", []);
  
  // States
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [completedSearch, setCompletedSearch] = useState(false);
  const [todo, setTodo] = useState(null);

  const total = todos.length;
  const completed = todos.filter(({ completed }) => completed).length;
  
  let searchedTodos = [];
  
  if(searchValue.length > 0) {
    searchedTodos = todos.filter(({ text }) => text.toUpperCase().includes(searchValue.toUpperCase()));
    if(completedSearch) {
      searchedTodos = searchedTodos.filter(todo => todo.completed);
    }
  } else {
    if(completedSearch) {
      searchedTodos = todos.filter(todo => todo.completed);
    } else {
      searchedTodos = [...todos];
    }
  }

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(({ id }) => id !== todoId);
    setTodos(newTodos);
  }

  const completeTodo = (event) => {
    const todoId = event.target.id.split("-").reverse()[0],
    checked = event.target.checked;
    
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex(todo => parseInt(todo.id) === parseInt(todoId));
    if(todoIdx >= 0) {
      newTodos[todoIdx].completed = checked;
      setTodos(newTodos);
    }
  }

  const createTodo = (text) => {
    const newTodos = [...todos];
    let newTodoId = 1;
    
    if(total > 0) {
      newTodoId = todos.sort((currTodo, actTodo) => actTodo.id - currTodo.id)[0].id + 1;
    }
    
    newTodos.push({
      id: newTodoId,
      text,
      completed: false
    });
    setTodos(newTodos);
  }

  const editTodo = (editedTodo) => {
    const todoIdx = todos.findIndex(todo => parseInt(todo.id) === parseInt(editedTodo.id));
    const newTodos = [...todos];
    newTodos[todoIdx] = editedTodo;
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{      
      loading,
      error,
      total,
      completed,
      searchValue,
      setSearchValue,
      searchedTodos,
      deleteTodo,
      completeTodo,
      createTodo,
      openModal, 
      setOpenModal,
      completedSearch, 
      setCompletedSearch,
      editTodo,
      todo, 
      setTodo,
    }}>
      { props.children }
    </TodoContext.Provider>
  )
}