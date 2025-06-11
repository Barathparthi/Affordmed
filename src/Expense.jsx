import React from "react";
import { useNavigate } from "react-router-dom";

function Expense() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/add-expense");
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>Track your expenses efficiently!</p>
      <button onClick={handleChange}>Add Expense</button>
    </div>
  );
}

export default Expense;
