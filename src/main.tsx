import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd-css-utilities/utility.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/Products/DetailView";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
