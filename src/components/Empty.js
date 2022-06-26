import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
// Styles
import "../styles/Empty.css"

export const Empty = () => {
  return (
    <span className="EmptyIcon-container">
      <FontAwesomeIcon icon={faFilePen} size="6x"/>

      <h2 className="EmptyIcon--title"> You've not TODOs today </h2>
      <h4 className="EmptyIcon--title"> 
        Use 
        <button className="EmptyIcon--btn-create"> + </button>
        to create a new Task!
      </h4>
    </span>
  )
}