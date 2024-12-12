import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "mango",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "groceries",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 4,
      description: "mart",
      amount: 10,
      category: "Utilities",
    },
  ]);

  if (expenses.length === 0) return null;

  //dummy dataset Creation for testing
  //and rendering purpose
  // const expenses = [
  //   {
  //     id: 1,
  //     description: "milk",
  //     amount: 10,
  //     category: "Utilities",
  //   },
  //   {
  //     id: 2,
  //     description: "mango",
  //     amount: 10,
  //     category: "Utilities",
  //   },
  //   {
  //     id: 3,
  //     description: "groceries",
  //     amount: 10,
  //     category: "Utilities",
  //   },
  //   {
  //     id: 4,
  //     description: "mart",
  //     amount: 10,
  //     category: "Utilities",
  //   },
  // ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
};

export default App;
