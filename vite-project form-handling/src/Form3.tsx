import { useForm } from "react-hook-form";
import Button from "./components/Button";

//This component is to demonstrate how to use statehook
//to get the form data
const Form3 = () => {
  //creating a useForm  hook

  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          Name
        </label>

        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, name: event.target.value });
          //   }}
          {...register("name")}
          id="fname"
          type="text"
          name="fname"
          className="form-control"
          //   value={person.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fage" className="form-label">
          Age
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, age: event.target.value });
          //   }}
          {...register("age")}
          id="fage"
          type="number"
          name="fage"
          //   value={person.age}
          className="form-control"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Form3;
