// components/Modal.tsx
import React, { ReactNode } from "react";
import styles from "./style.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
