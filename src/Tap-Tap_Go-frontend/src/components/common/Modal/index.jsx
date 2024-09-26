import { useCallback, useEffect, useRef } from "react";
import ModalProvider from "./ModalContext";
import clsx from "clsx";
import './index.css';


export default function Modal ({children, onClose, size='medium', style={}, ...props}) {
  const modalSize = {
    small: 'w-1/3',
    medium: 'w-1/2',
    large: 'w-2/3',
  }

  const dialogRef = useRef(null)

  useEffect(()=>{
    if(dialogRef.current){
      dialogRef.current.showModal()
    }

    return () => {
      if(dialogRef.current){
        dialogRef.current.close()
      }
    }
  },[])

  const handleOutsideClick = useCallback((e) => {
    if(dialogRef.current && !dialogRef.current.contains(e.target)){
      onClose()
    }
  }, [dialogRef.current])


  return (
    <ModalProvider {...props} onClose={onClose}>
      <div className="modal"
      onClick={handleOutsideClick}
      >
        <dialog ref={dialogRef} className={clsx(
          'modal-dialog',
          size,
        )}
        style={style}
        onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal-dialog-container"
          >
            {children}
          </div>
        </dialog>

      </div>
    </ModalProvider>
  );
}