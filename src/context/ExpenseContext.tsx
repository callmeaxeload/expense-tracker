import React, { useState } from 'react';
import { Expense } from '../types/ExpenseTypes';
import { nanoid } from 'nanoid';
import { ExpenseContext } from './expenseHooks';

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expense, setExpense] = useState<Expense[]>([]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    setExpense((prev) => [...prev, { ...expense, id: nanoid(16) }]);
  };
  const deleteExpense = (id: string) => {
    setExpense((prev) => prev.filter((expense) => expense.id !== id));
  };

  const editExpense = (id: string, updateExpense: Omit<Expense, 'id'>) => {
    setExpense((prev) =>
      prev.map((expense) =>
        expense.id === id ? { ...updateExpense, id } : expense
      )
    );
  };

  return (
    <ExpenseContext.Provider
      value={{ expense, addExpense, deleteExpense, editExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
