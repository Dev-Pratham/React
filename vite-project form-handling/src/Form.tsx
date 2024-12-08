import { useRef } from "react";
import Button from "./components/Button";

//getting form data using refHook
const Form = () => {
  //creating a reference hook object
  //can also use statehook
  const nameRef = useRef<HTMLInputElement>(null);
  //creating a person object to store the name and passowrd
  const person = {
    name: "",
    age: 0,
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // console.log("submitted");
        if (nameRef.current !== null) {
          person.name = nameRef.current.value;
        }
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          id="fname"
          name="fname"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fdata" className="form-label">
          Age
        </label>
        <input type="number" id="fdata" name="fdata" className="form-control" />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
