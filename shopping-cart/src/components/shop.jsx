import { useEffect, useState } from "react";
import "../styles/shop.css";

function Shop({ setCartItems }) {
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
          // set initial quantity using prod id as key
          initialQuantities[product.id] = "";
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

  // add a product to cart
  const addToCart = (product) => {
    const amount = Number(quantities[product.id]);

    const newItem = {
      id: product.id,
      name: product.title,
      amount: amount,
      price: product.price,
    };

    console.log("Item added to cart:", newItem);

    setCartItems((previousItems) => [...previousItems, newItem]);
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
              <button
                onClick={() =>
                  handleQuantityChange(
                    product.id,
                    Math.max(0, Number(quantities[product.id]) - 1),
                  )
                }
              >
                -
              </button>

              <input
                type="number"
                min="0"
                value={
                  quantities[product.id] === "" ? "" : quantities[product.id]
                }
                onChange={(event) => {
                  const value = event.target.value;

                  if (value === "") {
                    handleQuantityChange(product.id, "");
                  } else {
                    handleQuantityChange(
                      product.id,
                      Math.max(0, Number(value)),
                    );
                  }
                }}
                onBlur={() => {
                  if (quantities[product.id] === "") {
                    handleQuantityChange(product.id, 0);
                  }
                }}
              />

              <button
                onClick={() =>
                  handleQuantityChange(
                    product.id,
                    Number(quantities[product.id]) + 1,
                  )
                }
              >
                +
              </button>
            </div>

            <div className="cart-buttons">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => setCartMessage("Removing item...")}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;
