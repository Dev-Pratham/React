//to push new toppings to person state object
//when user clicked button

import { useState } from "react";
import Button from "./Button";
import UpdateLogicImmerLibrary from "./UpdateLogicImmerLibrary";
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

  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
      <UpdateLogicImmerLibrary></UpdateLogicImmerLibrary>
    </>
  );
}
export default App;
