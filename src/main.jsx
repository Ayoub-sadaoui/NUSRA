import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./components/Context.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
    <ToastContainer />
  </ContextProvider>
);
