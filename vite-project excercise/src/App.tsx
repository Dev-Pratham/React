import Button from "./components/Button";

//this project was all about some typeScrit concept
//learnt about typescript union operator
//and default values of props and why destructuring is
//necessary
function App() {
  return (
    <div>
      <Button
        input="Next:"
        color="success"
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

export default App;
