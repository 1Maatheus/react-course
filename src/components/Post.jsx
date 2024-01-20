// eslint-disable-next-line no-unused-vars
import React from "react";

export const Post = (props) => {
  return (
    <li className="h-fit p-7 my-4 mx-0 bg-purple-200 rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
      <p className="text-[0.8rem] font-bold text-violet-900 m-0 uppercase">
        {props.author}
      </p>
      <p className="text-xl text-violet-500 whitespace-pre-wrap italic m-[0.25rem 0 0 0]">
        {props.body}
      </p>
    </li>
  );
};
