import React, { useState } from 'react';
import { useExpenses } from '../context/useExpenses';

const ExpenseForm: React.FC = () => {
  const { addExpense } = useExpenses();
  const [form, setForm] = useState({
    amount: '',
    date: '',
    category: 'Food',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExpense({ ...form, amount: parseFloat(form.amount) });
    setForm({ amount: '', date: '', category: 'Food', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="number"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="form-control"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="form-control my-2"
        required
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="form-control my-2"
        required>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="form-control my-2"
      />
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
