export type Expense = {
  id: string;
  amount: number;
  date: string;
  category: string;
  description: string;
};

export type Category = 'Food' | 'Transportation' | 'Entertainment' | 'Other';
