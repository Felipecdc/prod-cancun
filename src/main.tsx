import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.tsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-center" theme="dark" />
  </React.StrictMode>
);
