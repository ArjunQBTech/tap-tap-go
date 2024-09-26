import { FiX, FiChevronLeft  } from "react-icons/fi";
import { useModal } from "./ModalContext";
import './index.css';

// Modal.Header
export const ModalHeader = ({ children }) => (
    <div className="modal-header">
      {children}
    </div>
  );
  
  // Modal.CloseBtn
  export const ModalCloseBtn = () => {
    const { onClose } = useModal();
    return (
      <button
        className="modal-close-btn"
        onClick={onClose}
      >
       <FiX/>
      </button>
    );
  };
  
  // Modal.BackBtn
  export const ModalBackBtn = () => {
    const { onBack } = useModal();
    return onBack ? (
      <button
        className="modal-back-btn"
        onClick={onBack}
      >
        <FiChevronLeft/>
      </button>
    ) : null;
  };
  
  // Modal.Body
  export const ModalBody = ({ children }) => (
    <div className="modal-body">
      {children}
    </div>
  );
  
  // Modal.Text
  export const ModalText = ({ children }) => (
    <p className="modal-text">
      {children}
    </p>
  );
  
  // Modal.Description
  export const ModalDescription = ({ children }) => (
    <p className="modal-description">
      {children}
    </p>
  );
  