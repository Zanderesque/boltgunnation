import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App id="my app" />
  </React.StrictMode>
);
