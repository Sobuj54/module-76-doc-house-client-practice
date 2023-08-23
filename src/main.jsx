import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import ContextAPI from "./ContextAPI/ContextAPI";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextAPI>
      <RouterProvider router={router}></RouterProvider>
    </ContextAPI>
  </React.StrictMode>
);
