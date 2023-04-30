import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/leyout/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Order from "./Components/Orders/Order.jsx";
import PrivateRout from "./Rout/PrivateRout.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRout>
            <Order></Order>
          </PrivateRout>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRout>
            <UserProfile></UserProfile>
          </PrivateRout>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
