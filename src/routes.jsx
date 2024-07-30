import Products from "./Componets/Products";
import Home from "./Componets/Home";
const routes = [
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "products",
    element: <Home />,
  },
];

export default routes;
