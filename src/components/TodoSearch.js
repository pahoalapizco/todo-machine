// context
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

import { ToggleSearchTodo } from './ToggleSearchTodo';
// Styles
import '../styles/TodoSearch.css';

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <section className="TodoSearch" >
      <input 
        className="TodoSearch--input" 
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      <ToggleSearchTodo />
    </section>
  );
}