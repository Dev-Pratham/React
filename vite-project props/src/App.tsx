//pascal casing is a thing in react
//if not used may throw unexpected behaviour.

import List from "./components/ListGroup";

function App() {
  //prop
  const items = ["Engineer", "Doctor", "Scientist", "Dietesian"];

  //prop function
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <List
        //Prop being passed here
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
