// context
import { TodoProvider } from './../context/TodoContext';
import { AppUI } from './AppUI';


export function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

