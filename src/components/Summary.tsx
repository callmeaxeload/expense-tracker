import React from 'react';
import { useExpenses } from '../context/useExpenses';

const Summary: React.FC = () => {
  const { expenses } = useExpenses();
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <h2>Total Expenses: ${total.toFixed(2)}</h2>;
};

export default Summary;
