import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useEffect } from "react";
export default function NavBar({ item }) {
  useEffect(() => {}, [item]);
  return (
    <>
      <div id="nav-bar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to={"/"}>
            <li>Products</li>
          </Link>
          <li style={{ marginLeft: 10 }}>
            <Cart item={item}></Cart>
          </li>
        </ul>
      </div>
    </>
  );
}
