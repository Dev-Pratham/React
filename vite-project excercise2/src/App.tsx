//to change the name of the player
//when user clicked button

import { useState } from "react";
import Button from "./Button";
function App() {
  //created a game object
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    //game.player.name will not work
    //...game is the spread operator it copies all the properites
    //of the game object
    setGame({ ...game, player: { ...game.player, name: "Dev-Pratham" } });
    console.log(game);
  };

  return <Button onClick={handleClick}>Click me</Button>;
}

export default App;
