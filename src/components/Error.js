import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
// Styles
import "../styles/Empty.css"

export const Error = () => {
  return (
    <span className="EmptyIcon-container">
      <FontAwesomeIcon icon={faCircleExclamation} size="6x"/>

      <h2 className="EmptyIcon--title"> Sorry! We have an error, <br /> please try later...</h2>
    </span>
  )
}