import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarsShow from "./CarsShow";
import CreateCars from "./crud/CreateCars";
import Login from "./auth/Login";
import Register from "./auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cars/:id",
    element: <CarsShow />,
  },
]);

const routerAuthorization = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cars/:id",
    element: <CarsShow />,
  },
  {
    path: "/cars-create",
    element: <CreateCars />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const token = localStorage.getItem("token");

root.render(
  <React.StrictMode>
    {token ? (
      <RouterProvider router={routerAuthorization} />
    ) : (
      <RouterProvider router={router} />
    )}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
