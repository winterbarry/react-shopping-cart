function Cart({ cartItems }) {
  return (
    <main className="cart-page">
      <h1 className="cart-header">Cart Page</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-placeholder"> Your cart is empty</div>
          ) : (
            cartItems.map((cartItem) => (
              // create a div for each cart item
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-item-name">{cartItem.name}</div>

                <div className="cart-item-amount">
                  Amount: {cartItem.amount}
                </div>

                <div className="cart-item-price">
                  Price: ${(cartItem.amount * cartItem.price).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">Total price: $0.00</div>
      </div>
    </main>
  );
}

export default Cart;
