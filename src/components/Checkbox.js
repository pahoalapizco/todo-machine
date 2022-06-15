export const Checkbox = ({ id }) => {
  return (
    <>      
      <input id={`Compleated-${id}`} type="checkbox" />
      <label for={`Compleated-${id}`}></label>
    </>
  )
}