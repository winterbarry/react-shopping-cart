import { useEffect, useState } from "react";
import "../styles/shop.css";

// MODIFY INITIAL PROD NO TO 0 AFTER!!!!!!

function Shop() {
  const [products, setProducts] = useState([]);

  // store the quantity for each product
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      // get the first 6 products from the response
      .then((data) => {
        setProducts(data.slice(0, 6));

        // variable to store initial item quantity
        const initialQuantities = {};

        data.slice(0, 6).forEach((product) => {
          // set initial quantity to 1 using prod id as key
          initialQuantities[product.id] = 1;
        });

        setQuantities(initialQuantities);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  // change quantity for a specific product
  const handleQuantityChange = (productId, value) => {
    setQuantities((previousQuantities) => ({
      ...previousQuantities,
      [productId]: value,
    }));
  };

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
              <input
                type="number"
                min="1"
                // show this product's stored quantity, otherwise show 1
                value={quantities[product.id] || 1}
                onChange={(event) =>
                  handleQuantityChange(product.id, event.target.value)
                }
              />
              <button>+</button>
            </div>

            <div className="cart-buttons">
              <button>Add to Cart</button>
              <button>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;
