// eslint-disable-next-line no-unused-vars
import React from "react";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="bg-gradient-to-b text-center from-[#321D51] to-[#6C5185] py-4 h-screen flex flex-col gap-7 text-[2.5rem]">
      <Post />
      <Post />
    </div>
  );
}

export default App;
