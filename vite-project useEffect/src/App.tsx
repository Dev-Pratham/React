import { useState } from "react";
import ProductList from "./ProductList";
const App = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
        <option value="OtherChores">OtherChores</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
};

export default App;