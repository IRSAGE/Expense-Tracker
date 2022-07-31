import React from "react";
import ExpenceItem from "./ExpenceItem";

const Expense = (props) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default Expense;
