import Button from "./components/Button";

//this project was all about some typeScrit concept
//learnt about typescript union operator
//and default values of props and why destructuring is
//necessary

import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        input="Next:"
        color="success"
        onClick={() => {
          setAlertVisible(true);
        }}
      />
    </>
  );
}

export default App;
