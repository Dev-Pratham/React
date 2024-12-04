import Alert from "./components/Alert";

function App() {
  // const text = "Hello Dev-Pratham";
  return (
    <div>
      {/* <Alert text={text} /> */}

      {/* it would be nice if we pass text as 
      a child to this component like this
      <Alert>
       Hello Dev-Pratham (child to this component)
      </Alert> */}

      <Alert>Hello Dev-Pratham</Alert>
    </div>
  );
}

export default App;
