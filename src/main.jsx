// Style
import "./styles/index.scss";

// React
import React from "react";
import { createRoot } from "react-dom/client";

// Eigene Komponenten
import { ParentContext } from "./store/Context";
import { BrowserRouter } from "react-router-dom";

// Haupt-Komponente
import App from "./App";

const root = createRoot(document.getElementById("root"))
root.render(
 
<React.StrictMode>
  <ParentContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParentContext>
</React.StrictMode> 
);
