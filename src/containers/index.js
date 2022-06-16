import { useState } from 'react';

// custom hooks
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';


export function App() {
  const {
    items: todos,
    saveItems: setTodos,
    loading,
    error
  } = useLocalStorage("TODOS", []);

  const [searchValue, setSearchValue] = useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(({ completed }) => completed).length;
  
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
    <AppUI
      loading={loading}
      error={error}
      total={totalTodos} 
      completed={completedTodos} 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  );
}

