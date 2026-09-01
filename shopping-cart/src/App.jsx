import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Shop from "./components/shop";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar cartCount={0} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
