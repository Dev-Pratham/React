import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //this one
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
