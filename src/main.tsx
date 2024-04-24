import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import Monsters from "./pages/Monsters.tsx";
import Monster from "./pages/Monster.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      /* NavBar skall vara konstant och HomePage skall synas som default. resterande skall renderas */
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/monsters",
        element: <Monsters />,

        children: [],
      },
      {
        path: "/monsters/:monsterId",
        element: <Monster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
