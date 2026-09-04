import "../styles/shop.css";

function Shop() {
  return (
    <main>
      <h1>Shop Page</h1>

      <div className="shop-container">
        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product One</h2>
            <p>$20.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product Two</h2>
            <p>$25.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product Three</h2>
            <p>$30.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product Four</h2>
            <p>$35.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product Five</h2>
            <p>$40.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <div className="product-info">
            <h2>Product Six</h2>
            <p>$45.00</p>
          </div>

          <div className="quantity-selector">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;
