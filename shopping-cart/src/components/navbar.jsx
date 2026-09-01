function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <button>Home</button>
      <button>Shop</button>
      <button className="cart-button">
        <span className="cart-text">Cart-text</span>
        <span className="cart-count">{cartCount}</span>
      </button>
    </nav>
  );
}
export default Navbar;
