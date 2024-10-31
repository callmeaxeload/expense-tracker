// src/components/ExpenseList.tsx
import React, { useState } from 'react';
import { useExpenses } from '../context/useExpenses';
import ExpenseFilter from './ExpenseFilter';

type FilterCriteria = {
  category: string;
  date: string;
};

const ExpenseList: React.FC = () => {
  const { expenses, deleteExpense } = useExpenses();
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    category: 'All',
    date: '',
  });

  const handleFilterChange = (criteria: FilterCriteria) => {
    setFilterCriteria(criteria);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      filterCriteria.category === 'All' ||
      expense.category === filterCriteria.category;
    const matchesDate =
      !filterCriteria.date || expense.date === filterCriteria.date;
    return matchesCategory && matchesDate;
  });

  return (
    <div>
      <ExpenseFilter onFilterChange={handleFilterChange} />
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <li
            key={expense.id}
            className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{expense.description}</strong> ${expense.amount}{' '}
              <em>({expense.category})</em> on {expense.date}
            </div>
            <button
              onClick={() => deleteExpense(expense.id)}
              className="btn btn-danger btn-sm">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
