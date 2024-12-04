//pascal casing is a thing in react
//if not used may throw unexpected behaviour.

// import Msg from './Message';
import List from "./components/ListGroup";

function App() {
  const items = ["Engineer", "Doctor", "Scientist", "Dietesian"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <List
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
