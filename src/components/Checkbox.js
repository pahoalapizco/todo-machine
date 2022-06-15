export const Checkbox = ({ id, completed, onCompleted }) => {
  return (
    <>
    {
      completed 
        ? <input id={`Compleated-${id}`} type="checkbox" onClick={onCompleted} checked />
        : <input id={`Compleated-${id}`} type="checkbox" onClick={onCompleted}/>
    }      
      <label htmlFor={`Compleated-${id}`}></label>
    </>
  )
}