import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { SymbolsProvider } from "./context/symbolsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SymbolsProvider>
    <App />
  </SymbolsProvider>
);
