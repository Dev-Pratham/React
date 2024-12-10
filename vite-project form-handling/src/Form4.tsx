import { useForm } from "react-hook-form";
import Button from "./components/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//defined the schema for form validation using zod
const schema = z.object({
  name: z.string().min(3, { message: "Name be 3 characters long" }),
  age: z
    .number({ invalid_type_error: "Age Field is required" })
    .min(18, { message: "Age should be > 18" }),
  //zod displays default error message
});

/*In Zod, z.infer is a utility type that extracts the inferred TypeScript type from a Zod schema.

For example, if you have a Zod schema that defines the structure and rules of an object, z.infer will derive the equivalent TypeScript type for that schema. */
type FormData = z.infer<typeof schema>;
//This component is to demonstrate how to use Form statehook
//to get the form data
const Form4 = () => {
  //creating a useForm  hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {...register("name")}
          id="name"
          type="text"
          className="form-control "
          //   value={person.name}
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
          //zod will take care of message based on schema defined
        )}
        {/* 
        //while using zod we just need to check if the name exists in the error object and render error dynamically

        {errors.name?.type === "minLength" && (
          <p className="text-warning">Name Must Be atleast 3 characters</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="fage" className="form-label">
          Age
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, age: event.target.value });
          //   }}

          {...register("age", { valueAsNumber: true })}
          id="fage"
          type="number"
          //   value={person.age}
          className="form-control"
        />
      </div>
      {errors.age && (
        <p className="text-danger">{errors.age.message}</p>
        //zod will take care of message based on schema defined
      )}
      <Button>Submit</Button>
    </form>
  );
};

export default Form4;
