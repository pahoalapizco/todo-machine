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
  
  const [searchValue, setSearchValue] = useState('');
  
  const total = todos.length;
  const completed = todos.filter(({ completed }) => completed).length;
  
  let searchedTodos = [];
  
  if(searchValue.length > 0) {
    searchedTodos = todos.filter(({ text }) => text.toUpperCase().includes(searchValue.toUpperCase()));
  } else {
    searchedTodos = [...todos];
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
    }}>
      { props.children }
    </TodoContext.Provider>
  )
}