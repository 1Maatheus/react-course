// eslint-disable-next-line no-unused-vars
import React from "react";
import style from "./NewPost.module.css";

// eslint-disable-next-line react/prop-types
export const NewPost = ({ onCancel, onAddPost }) => {
  const [author, setAuthor] = React.useState("");
  const [post, setPost] = React.useState("");

  function onChangeHandler(event) {
    setPost(event.target.value);
  }
  function onChangeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      body: post,
      author: author,
    };

    onAddPost(data);
    onCancel();
  }

  return (
    <div className="flex justify-center">
      <form className={style.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={onChangeAuthorHandler}
          />
        </p>
        <p className={style.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};
