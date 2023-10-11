/**
 * モーダルの枠
 */
import React, { ReactNode } from "react";
import styles from "./style.module.scss";

/**
 * モーダルに渡すprops
 */
interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, children } = props;

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
