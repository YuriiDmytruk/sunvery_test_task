import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import DogAnimation from "./components/animationStep1/dogAnimation/dogAnimation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DogAnimation />
  </React.StrictMode>
);
