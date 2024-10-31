import React from 'react';
import { ExpenseProvider } from './context/ExpenseProvider';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <div className="background-overlay">
        <div className="container my-5">
          <h1>Expense Tracker</h1>
          <ExpenseForm />
          <Summary />
          <ExpenseList />
        </div>
      </div>
    </ExpenseProvider>
  );
};

export default App;
