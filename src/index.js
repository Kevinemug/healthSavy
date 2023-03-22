import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import "./assets/scss/style.scss";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
