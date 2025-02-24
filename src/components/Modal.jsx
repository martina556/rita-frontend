import './Modal.scss'
const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className='modal-tittle'>Error</h2>
        <p>{message}</p>
        <button onClick={onClose} className="modal-button">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;