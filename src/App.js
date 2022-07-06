import React from "react";
import SingleTransition from "./components/sigleTransition/SingleTransition";
import SingleCSSTransition from "./components/sigleTransition/SingleCSSTransition";

function App() {
  return (
    <>
      <div className="App">
        <SingleCSSTransition />
      </div>
      <div className="App">
        <SingleCSSTransition />
      </div>
    </>
  );
}

export default App;
