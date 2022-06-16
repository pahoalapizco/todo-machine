import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';

export function AppUI({
  total,
  completed,
  searchValue,
  setSearchValue,
  searchedTodos,
  deleteTodo,
  completeTodo,
  loading,
  error
}) {  

  return (
    <>
      <TodoCounter 
        total={total} 
        completed={completed} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && <p> Loading ToDos...!! </p> }
        {error && <p> Opp! We have an error... </p> }
        {(!loading && !searchedTodos.length) && <p> Create a new ToDo!! :D  </p> }
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

