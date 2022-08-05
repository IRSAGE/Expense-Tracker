import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found in {filteredYear}</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenceItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      )}
    </Card>
  );
};

export default Expense;
