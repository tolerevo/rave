import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./componentes/App/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
