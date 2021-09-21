import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterValue, setFilteredValue] = useState('2020');

  const expenseFilter = (filter) => {
    setFilteredValue(filter);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onFilterSelected={expenseFilter} yearSelected={filterValue}/>
      <Card>
        {props.items
          .filter(
            (expense) => expense.date.getFullYear().toString() === filterValue || filterValue === ''
          )
          .map((filteredExpense) => (
            <ExpenseItem
              date={filteredExpense.date}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
