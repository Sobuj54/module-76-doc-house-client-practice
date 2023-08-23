import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import ContextAPI from "./ContextAPI/ContextAPI";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextAPI>
        <RouterProvider router={router}></RouterProvider>
      </ContextAPI>
    </HelmetProvider>
  </React.StrictMode>
);
