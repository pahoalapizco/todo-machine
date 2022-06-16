// context
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoSearch.css';

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <input 
      className="TodoSearch--input" 
      placeholder="Search..."
      value={searchValue}
      onChange={onChangeSearchValue}
    />
  );
}