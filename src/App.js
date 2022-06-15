import { useState } from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';

const defaultTodos = [
  { id: 1, text: "Tarea 1", completed: true },
  { id: 2, text: "Tarea 2", completed: false },
  { id: 3, text: "Tarea 3", completed: false },
]


function App() {
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
    <>
      <TodoCounter 
        total={totalTodos} 
        completed={completedTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        { 
          searchedTodos.map(todo=> 
            <TodoItem 
              key={todo.id} 
              todoId={todo.id} 
              text={todo.text} 
              completed={todo.completed}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />) 
          }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
