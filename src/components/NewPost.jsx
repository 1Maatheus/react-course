// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./NewPost.module.css";

export const NewPost = (props) => {
  return (
    <div className="flex justify-center">
      <form className={style.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={props.onAuthorChange}
          />
        </p>
      </form>
    </div>
  );
};
