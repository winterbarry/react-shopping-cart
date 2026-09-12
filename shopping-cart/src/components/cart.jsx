function Cart({ cartItems, setCartItems }) {
  function removeHandler(productId) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    );
  }

  function incrementHandler(productId) {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  }

  function decrementHandler(productId) {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId ? { ...item, amount: item.amount - 1 } : item,
      ),
    );
  }

  return (
    <main className="cart-page">
      <h1 className="cart-header">Cart Page</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-placeholder">Your cart is empty</div>
          ) : (
            cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                {/* left side information */}
                <div className="cart-item-info">
                  <div className="cart-item-name">{cartItem.name}</div>

                  <div className="cart-item-price">
                    Price: ${(cartItem.amount * cartItem.price).toFixed(2)}
                  </div>
                </div>

                {/* right side controls */}
                <div className="cart-item-controls">
                  <div className="cart-item-remove">
                    <button onClick={() => removeHandler(cartItem.id)}>
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-quantity">
                    <button onClick={() => decrementHandler(cartItem.id)}>
                      -
                    </button>
                    <span>{cartItem.amount}</span>
                    <button onClick={() => incrementHandler(cartItem.id)}>
                      +
                    </button>
                  </div>
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
