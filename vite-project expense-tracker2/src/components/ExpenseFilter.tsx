import categories from "../Categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((categories) => (
        <option key={categories} value={categories}>
          {categories}
        </option>
      ))}
      {/* <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option> */}
    </select>
  );
};

export default ExpenseFilter;
