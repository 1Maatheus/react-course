import React from "react";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b  from-[#321D51] to-[#6C5185] p-4 h-screen">
        <Post />
        <Post />
      </div>
    </>
  );
}

export default App;
