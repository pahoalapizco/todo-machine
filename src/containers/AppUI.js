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

