// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <li className={style.post}>
      <p className={style.author}>{props.author}</p>
      <p className={style.text}>{props.body}</p>
    </li>
  );
};
