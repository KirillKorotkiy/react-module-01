import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import css from './css/index.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
