import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Componets/Products.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./style.css";
import Header from "./Componets/NavBar.jsx";
import routes from "./routes";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
