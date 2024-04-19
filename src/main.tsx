import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Monsters from "./pages/Monsters.tsx";
import Monster from "./pages/Monster.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/monsters",
    element: <Monsters />,

    children: [{ path: "/monsters/:monsterId", element: <Monster /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
