import { useState } from "react";
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
      category: "", // default value
    },
  });

  // State to store form data and filter category
  const [entries, setEntries] = useState<FormData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Add entry to the state
  const handleClick = (data: FormData) => {
    setEntries((prevEntrie) => [...prevEntrie, data]);
    reset(); // Reset the form
  };

  // Delete entry from the state
  const deleteEntry = (index: number) => {
    setEntries(
      (prevEntries) => prevEntries.filter((entries, i) => i !== index) //if you remove entries you cannot access prevelement entries
    );
  };

  // Filter entries based on the selected category
  const filteredEntries =
    selectedCategory && selectedCategory !== "All Categories"
      ? entries.filter((entry) => entry.category === selectedCategory)
      : entries;

  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit(handleClick)}>
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
            <p className="text-warning">Should be at least 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true, min: 0 })}
            type="number"
            className="form-control"
            id="amt"
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required</p>
          )}
          {errors.amount?.type === "min" && (
            <p className="text-danger">Amount cannot be negative</p>
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
            <option disabled>Select Category</option>
            <option>Groceries</option>
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

      {/* Category Filter */}
      {entries.length !== 0 && (
        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label">
            Filter by Category
          </label>
          <select
            id="categoryFilter"
            className="form-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Groceries</option>
            <option>Entertainment</option>
            <option>Utilities</option>
          </select>
        </div>
      )}

      {/* Table */}
      {entries.length !== 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.description}</td>
                <td>{entry.amount}</td>
                <td>{entry.category}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteEntry(index)} // Call deleteEntry with the index
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
