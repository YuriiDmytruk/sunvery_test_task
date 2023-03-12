import React from "react";
import ReactDOM from "react-dom/client";

//import App from "./components/App";
import "./mainStyle.css";

import Page3 from "./components/page3/page_3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page3 />
  </React.StrictMode>
);
