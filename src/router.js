import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ProductFormPage from "./pages/ProductFormPage";

const routes = [
  {
    path: "/my-project-reactjs",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: false,
    main: () => <ProductsPage />,
  },
  {
    path: "/product-action",
    exact: false,
    main: () => <ProductFormPage />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
