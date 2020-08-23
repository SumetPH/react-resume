import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// asset
import "./asset/css/global.css";
import "./asset/css/bulma.css";
import "./asset/css/animate.css";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
