import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header(props) {
  return (
    <>
      <div id="nav-bar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/products">
            <li>Products</li>
          </Link>
          <li style={{ marginLeft: 10 }}>
            <Cart></Cart>
          </li>
        </ul>
      </div>
    </>
  );
}
