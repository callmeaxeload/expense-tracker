import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context)
    throw new Error('useExpenses must be used within ExpenseProvider');
  return context;
};
