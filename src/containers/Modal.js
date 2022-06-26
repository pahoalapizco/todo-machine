import ReactDOM from 'react-dom';

import '../styles/Modal.css';

const ModalUI = ({ children }) => {
  return (
    <div className='Modal-container'>
      { children }
    </div>
  )
}

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalUI children={children} />,
    document.getElementById("modal"),
  );
}