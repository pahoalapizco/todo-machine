export const Checkbox = ({ id, completed, completeTodo }) => {
  return (
    <>    
      <input 
        id={`Compleated-${id}`} 
        type="checkbox"
        value={completed}
        onChange={completeTodo}
        checked={completed}
      />
      <label className="labelCheck" htmlFor={`Compleated-${id}`}></label>
    </>
  )
}