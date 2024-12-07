import { useState } from "react";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import Button from "./components/Button";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <NavBar totalCount={cartItems.length} />
      <ShoppingCart cartItems={cartItems} />
      <Button
        onClear={() => {
          setCartItems([]);
        }}
      >
        Clear Cart
      </Button>
    </div>
  );
}

export default App;
