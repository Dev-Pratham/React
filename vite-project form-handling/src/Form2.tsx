import { useState } from "react";
import Button from "./components/Button";

//This component is to demonstrate how to use statehook
//to get the form data
const Form2 = () => {
  //creating a useState hook
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          Name
        </label>

        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          id="fname"
          type="text"
          name="fname"
          className="form-control"
          value={person.name} //to ensure that there is only one state that manages value and keep things in sync
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fage" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, age: event.target.value });
          }}
          id="fage"
          type="number"
          name="fage"
          value={person.age} // to ensure that there is only one state that manages value and keep things in sync
          className="form-control"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form2;
