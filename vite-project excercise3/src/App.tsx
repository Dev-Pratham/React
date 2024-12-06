//to change the name of the player
//when user clicked button

import { useState } from "react";
import Button from "./Button";
function App() {
  //created a game object
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    console.log(pizza.toppings[0]);
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log(pizza.toppings[1]);
  };

  return <Button onClick={handleClick}>Click me</Button>;
}

export default App;
