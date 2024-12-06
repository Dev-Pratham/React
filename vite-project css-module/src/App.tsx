import Button from "./components/Button";

//this project was all about some typeScrit concept
//learnt about typescript union operator
//and default values of props and why destructuring is
//necessary

function App() {
  return (
    <>
      <Button
        input="Next:"
        color="danger"
        onClick={() => {
          //anything here
        }}
      ></Button>
    </>
  );
}

export default App;
