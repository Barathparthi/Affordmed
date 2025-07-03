import React, { useState } from "react";
import AddExpense from "./AddExpense";

function ExpenseDashboard() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="dashboard">
      <AddExpense onAddExpense={handleAddExpense} />

      <h2>Expense List</h2>
      <div className="expense-list">
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>  
        ) : (
          expenses.map((expense) => (
            <div key={expense.id} className="expense-card">
              <div>
                <strong>{expense.expenseName}</strong>
                <p>Amount: ${expense.amount}</p>
                <p>Date: {expense.date}</p>
                <p>Category: {expense.category}</p>
              </div>
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </div>
          ))
        )}
      </div>

      <h3>Total Expenses: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseDashboard;
