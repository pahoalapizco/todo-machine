import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';

const todos = [
  { id: 1, text: "Tarea 1", completed: false },
  { id: 2, text: "Tarea 2", completed: false },
  { id: 3, text: "Tarea 3", completed: false },
]

const totalItems = todos.length;
const totalCompletedItems = todos.filter(({ completed }) => completed).length;

function App() {
  return (
    <>
      <TodoCounter totalItems={totalItems} totalCompleatedItems={totalCompletedItems} />
      <TodoSearch />
      <TodoList>
        { todos.map(todo=> <TodoItem key={todo.id} todoId={todo.id} text={todo.text} completed={todo.completed} />) }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
