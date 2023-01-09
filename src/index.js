import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Onboarding",
    element: <Onboarding />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
