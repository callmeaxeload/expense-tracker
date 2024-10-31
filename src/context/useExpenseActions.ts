import { useState } from 'react';
import { Expense } from '../types/ExpenseTypes';
import { nanoid } from 'nanoid';

export function useExpenseActions() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    setExpenses((prev) => [...prev, { ...expense, id: nanoid(16) }]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const editExpense = (id: string, updatedExpense: Omit<Expense, 'id'>) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id ? { ...updatedExpense, id } : expense
      )
    );
  };

  return { expenses, addExpense, deleteExpense, editExpense };
}
