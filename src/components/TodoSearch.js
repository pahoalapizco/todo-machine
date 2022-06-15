import '../styles/TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {

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