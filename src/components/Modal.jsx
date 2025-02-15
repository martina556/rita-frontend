const Modal = ({ children, onClose }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p>{children}</p>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  