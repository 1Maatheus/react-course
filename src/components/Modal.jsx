// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
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
