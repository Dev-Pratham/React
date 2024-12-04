//pascal casing is a thing in react
//if not used may throw unexpected behaviour.

// import Msg from './Message';
import List from "./components/ListGroup";

function App() {
  const items = ["Engineer", "Doctor", "Scientist", "Dietesian"];

  return (
    <div>
      <List items={items} heading="Cities" />
    </div>
  );
}

export default App;
