import { createContext, useContext } from 'react';
import { Expense } from '../types/ExpenseTypes';

type ExpenseContextType = {
  expense: Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: string) => void;
  editExpense: (id: string, expense: Omit<Expense, 'id'>) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context)
    throw new Error('useExpenses must be used within a ExpenseProvider');
  return context;
};

export { ExpenseContext, useExpenses };
