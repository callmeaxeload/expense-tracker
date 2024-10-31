// src/context/ExpenseContext.ts
import { createContext } from 'react';
import { Expense } from '../types/ExpenseTypes';

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: string) => void;
  editExpense: (id: string, updatedExpense: Omit<Expense, 'id'>) => void;
};

export const ExpenseContext = createContext<ExpenseContextType | undefined>(
  undefined
);
