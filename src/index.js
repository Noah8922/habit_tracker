import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
