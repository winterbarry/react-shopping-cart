import { Link } from "react-router";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        <span>Cart</span>
        <span>{cartCount}</span>
      </Link>
    </nav>
  );
}
export default Navbar;
