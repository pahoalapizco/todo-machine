import { useState } from 'react';

import { AppUI } from './AppUI';

export function App() {
const localstorageTodos = JSON.parse(localStorage.getItem('TODOS'));
const defaultTodos = localstorageTodos || [];

if(!localstorageTodos) {
  localStorage.setItem('TODOS', JSON.stringify([]));
}

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(({ completed }) => completed).length;
  
  let searchedTodos = [];

  if(searchValue.length > 0) {
    searchedTodos = todos.filter(({ text }) => text.toUpperCase().includes(searchValue.toUpperCase()));
  } else {
    searchedTodos = [...todos];
  }
  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS', JSON.stringify(newTodos));
  }

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(({ id }) => id !== todoId);
    saveTodos(newTodos);
  }
  const completeTodo = (event) => {
    const todoId = event.target.id.split("-").reverse()[0],
    checked = event.target.checked;
    
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex(todo => parseInt(todo.id) === parseInt(todoId));
    if(todoIdx >= 0) {
      newTodos[todoIdx].completed = checked;
      saveTodos(newTodos);
    }
  }

  return (
    <AppUI 
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

