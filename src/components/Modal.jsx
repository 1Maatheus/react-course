import React from "react";
import style from "./Modal.module.css";

export const Modal = ({ children, onClose }) => {
  return (
    <div className={style.backdrop}>
      <dialog open className={style.modal}>
        {children}
        <button className={style.closeBtn} onClick={onClose}>
          X
        </button>
      </dialog>
    </div>
  );
};
