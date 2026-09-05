import { useEffect, useState } from "react";
import "../styles/shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      // get the first 6 products from the response
      .then((data) => {
        setProducts(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  return (
    <main>
      <h1>Shop Page</h1>
      <div className="shop-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">
              <h2>{product.title}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>

            <div className="quantity-selector">
              <button>-</button>
              <input type="number" value="1" readOnly />
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;
