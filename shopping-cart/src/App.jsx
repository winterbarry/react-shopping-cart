import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Shop from "./components/shop";
import Cart from "./components/cart";

function App() {
  const [cartMessage, setCartMessage] = useState("Here is your checkout");
  return (
    <BrowserRouter>
      <Navbar cartCount={0} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop setCartMessage={setCartMessage} />}
        />
        <Route path="/cart" element={<Cart cartMessage={cartMessage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
