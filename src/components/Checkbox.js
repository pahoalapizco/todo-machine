export const Checkbox = ({ id, completed }) => {
  return (
    <>
    {
      completed 
        ? <input id={`Compleated-${id}`} type="checkbox" checked />
        : <input id={`Compleated-${id}`} type="checkbox" />
    }      
      <label for={`Compleated-${id}`}></label>
    </>
  )
}