import { useForm } from "react-hook-form";
import Button from "./components/Button";

//This component is to demonstrate how to use statehook
//to get the form data
const Form3 = () => {
  //creating a useForm  hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <form
      //if there is something wrong with the validation the handleSubmit is not called
      //in react!
      onSubmit={handleSubmit((data) => {
        console.log(data.name);
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>

        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, name: event.target.value });
          //   }}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control "
          //   value={person.name}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name Field is Required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-warning">Name Must Be atleast 3 characters</p>
        )}
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
          //   value={person.age}
          className="form-control"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Form3;
