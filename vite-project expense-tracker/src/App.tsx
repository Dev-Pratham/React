const App = () => {
  return (
    <>
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="desc" />
        </div>
        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" id="amt" />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option>Groceries`</option>
            <option>Entertainment</option>
            <option>Utilities</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mb-3">
        <label htmlFor="allCategory" className="form-label">
          All Category
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected>All Categories</option>
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
