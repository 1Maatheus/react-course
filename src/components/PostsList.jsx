// eslint-disable-next-line no-unused-vars
import React from "react";
import { Post } from "./Post";
import { NewPost } from "./NewPost";
import style from "./PostList.module.css";
import { Modal } from "./Modal";

export const PostsList = ({ isPosting, onStopPosting }) => {
  const [author, setAuthor] = React.useState("");
  const [post, setPost] = React.useState("");

  function onChangeHandler(event) {
    setPost(event.target.value);
  }
  function onChangeAuthorHandler(event) {
    setAuthor(event.target.value);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={onChangeHandler}
            onAuthorChange={onChangeAuthorHandler}
          />
        </Modal>
      )}

      <ul className={style.posts}>
        <Post author={author} body={post} />
        <Post
          author="Nayara"
          body="Check out the full Next.js and React.js course!"
        />
      </ul>
    </>
  );
};
