import React from "react";
import "./ExpenceItem.css";
const ExpenceItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.65</div>
      </div>
    </div>
  );
};

export default ExpenceItem;