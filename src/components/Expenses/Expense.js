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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenceItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <ExpenceItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenceItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
    </Card>
  );
};

export default Expense;
