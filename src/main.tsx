import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./setup/config/i18n/i18n";
import "./index.scss";
import { ThemeProvider } from "./setup/providers/ThemeProvider/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
