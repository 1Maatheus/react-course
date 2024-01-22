// eslint-disable-next-line no-unused-vars
import React from "react";
import { PostsList } from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modal, setModal] = React.useState(false);

  function showModalHandler() {
    setModal(true);
  }

  function hideModal() {
    setModal(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modal} onStopPosting={hideModal} />
      </main>
    </>
  );
}

export default App;
