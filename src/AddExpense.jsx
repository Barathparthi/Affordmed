import React, { useState } from "react";

function AddExpense({onAddExpense}  ) {
  const [form, setForm] = useState({
    expenseName: "",
    amount: "",
    date: "",
    category: "food",
  });

  const handleChange = (event) => {
    setForm((prevform) => ({
      ...prevform,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Expense Submitted:", form);
    const addexpense = {
      id: Date.now(),
      ...form,
    };
    onAddExpense(addexpense);
    // Reset the form after submission
    setForm({
      expenseName: "",
      amount: "",
      date: "",
      category: "food",
    });
  };
  return (
    <>
      {/* Form Section */}
      <h1>Add Expense</h1>
      <p>Fill in the details of your expense below:</p>

      <form className="expense-form" onSubmit={handleSubmit}>
        <section>
          <label>Expense Name:</label>
          <input
            type="text"
            name="expenseName"
            value={form.expenseName}
            onChange={handleChange}
          />
        </section>
        <section>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
        </section>
        <section>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </section>
        <section>
          <label>Category:</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </section>
        <section>
            <button type="submit">Submit</button>
        </section>
      </form>
    </>
  );
}

export default AddExpense;
