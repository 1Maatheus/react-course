// eslint-disable-next-line no-unused-vars
import React from "react";
import { Post } from "./Post";

export const PostsList = () => {
  return (
    <ul className="max-w-[50rem] my-4 mx-auto py-4 px-0 grid gap-4 grid-cols-[repeat(3,30%)] justify-center">
      <Post author="Matheus" body="React.js is awesome!" />
      <Post
        author="Nayara"
        body="Check out the full Next.js and React.js course!"
      />
    </ul>
  );
};
