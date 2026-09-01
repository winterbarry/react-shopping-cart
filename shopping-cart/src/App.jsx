import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Shop from "./components/shop";
import Cart from "./components/copy";

function App() {
  return (
    <>
      <Navbar cartCount={2} />

      <main>
        <h1>Shopping Page</h1>
      </main>
    </>
  );
}

export default App;
