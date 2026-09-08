function Cart({ cartMessage }) {
  return (
    <main className="cart-page">
      <h1 className="cart-header">Cart Page</h1>
      <div className="cart-container">
        <div className="cart-message">{cartMessage}</div>
        <div className="cart-total">Total price: $0.00</div>
      </div>
    </main>
  );
}

export default Cart;
