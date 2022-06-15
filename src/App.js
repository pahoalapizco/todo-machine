import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  { id: 1, text: "Tarea 1", completed: false },
  { id: 2, text: "Tarea 2", completed: false },
  { id: 3, text: "Tarea 3", completed: true },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { todos.map(todo=> <TodoItem key={todo.id} todoId={todo.id} text={todo.text} completed={todo.completed} />) }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
