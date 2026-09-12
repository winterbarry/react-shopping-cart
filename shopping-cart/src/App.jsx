import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Shop from "./components/shop";
import Cart from "./components/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop setCartItems={setCartItems} />} />

        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
