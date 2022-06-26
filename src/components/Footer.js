import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterUI = () => {
  return (
    <>
      <p>Made with &#128156; by Pahoalapizco</p>
      <div class="social-media--container">
        <a href="https://www.github.com/pahoalapizco" target="_blank" rel="noreferrer">
          <span> <FontAwesomeIcon icon={faGithub} /> </span>
        </a>
        <a href="https://www.linkedin.com/in/pahoalapizco/" target="_blank" rel="noreferrer">
          <span> <FontAwesomeIcon icon={faLinkedin} /> </span>
        </a>
      </div>
    </>
  )
}

export const Footer = () => {
  return ReactDOM.createPortal(
    <FooterUI />,
    document.getElementById("footer"),
  );
}