// src/context/ExpenseProvider.tsx
import React, { ReactNode } from 'react';
import { ExpenseContext } from './ExpenseContext';
import { useExpenseActions } from './useExpenseActions';

// Provider component that wraps children in ExpenseContext
export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const { expenses, addExpense, deleteExpense, editExpense } =
    useExpenseActions();

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, editExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
