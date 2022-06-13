export const TodoItem = ({ text, completed }) => {
  return (
    <li>
      <span> C </span>
      { text }

      { completed && <span> X </span> }
    </li>
  );
}