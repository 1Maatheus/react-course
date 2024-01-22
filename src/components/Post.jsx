// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Post.module.css";

// eslint-disable-next-line react/prop-types
export const Post = ({ author, body }) => {
  return (
    <li className={style.post}>
      <p className={style.author}>{author}</p>
      <p className={style.text}>{body}</p>
    </li>
  );
};
