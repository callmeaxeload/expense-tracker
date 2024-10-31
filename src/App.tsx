// src/App.tsx
import React from 'react';
import { ExpenseProvider } from './context/ExpensrProvider';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <div className="container">
        <h1 className="my-4">Expense Tracker</h1>
        <ExpenseForm />
        <Summary />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
