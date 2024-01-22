// eslint-disable-next-line no-unused-vars
import React from "react";
import { Post } from "./Post";
import { NewPost } from "./NewPost";
import style from "./PostList.module.css";
import { Modal } from "./Modal";

// eslint-disable-next-line react/prop-types
export const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = React.useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}>Ainda não existem posts.</div>
      )}
    </>
  );
};
