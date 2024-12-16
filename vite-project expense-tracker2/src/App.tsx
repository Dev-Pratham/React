import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

//in real world we are gonna retrieve it from a server
// export const categories = ["Groceries", "Utilities", "Entertainment"] as const;
// as const was added to rezolve zod object categories error
//as the error is not really constant we can still push the array
//to to make it constant we have as const after that we cannot push
//this is something related to the typescript
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      category: "Groceries",
    },
    {
      id: 3,
      description: "groceries",
      amount: 10,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "mart",
      amount: 10,
      category: "Utilities",
    },
  ]);

  if (expenses.length === 0)
    return (
      <ExpenseForm
        onSubmit={(data) =>
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
        }
      ></ExpenseForm>
    );

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

  //creating local variable we are not using state variables
  //because dont use state variables which can be calculated
  //based on exsisting state variables

  const visibleExpenses = selectedCategory
    ? expenses.filter((arr) => arr.category == selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(visibleExpenses.filter((arr) => arr.id !== id))
        }
      ></ExpenseList>
    </div>
  );
};

export default App;
