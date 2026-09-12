import { Link } from "react-router";
import "../styles/navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>

      <Link to="/cart" className="cart-link">
        <div className="cart-text">Cart</div>
        <div className="cart-count">{cartCount}</div>
      </Link>
    </nav>
  );
}

export default Navbar;
