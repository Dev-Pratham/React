import { useForm } from "react-hook-form";
import Button from "./components/Button";

//This component is to demonstrate how to use Form statehook
//to get the form data

interface FormData {
  //with the interface we are defining the shape of the input form
  //when you write errors.name.type you will see toggle option
  //easier for readability and code debug
  name: string;
  age: number;
}

const Form3 = () => {
  //creating a useForm  hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

        {/* The FormData interface will work here to provide toggle option */}
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form3;
