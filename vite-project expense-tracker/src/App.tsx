import { useForm } from "react-hook-form";

interface FormData {
  description: string;
  amount: string;
  category: string;
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      category: "", //default value
    },
  });

  console.log(errors);

  return (
    <>
      <form
        className="mb-4"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            type="text"
            className="form-control"
            id="desc"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Description is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-warning">Should Be at;east 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            type="number"
            className="form-control"
            id="amt"
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Age is required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option disabled>✔️</option>
            <option>Groceries`</option>
            <option>Entertainment</option>
            <option>Utilities</option>
          </select>
          {errors.category?.type === "required" && (
            <p className="text-danger">Category is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mb-3">
        <label htmlFor="allCategory" className="form-label">
          All Category
        </label>
        <select
          id="allCategory"
          className="form-select"
          aria-label="Default select example"
        >
          <option>All Categories</option>
          <option>Groceries`</option>
          <option>Entertainment</option>
          <option>Utilities</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Decsription</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Milk</th>
            <td>$5.00</td>
            <td>Grocery</td>
            <td>
              <button type="button" className="btn btn-outline-danger">
                Danger
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default App;
