// src/components/ExpenseFilter.tsx
import React, { useState } from 'react';
import { Category } from '../types/ExpenseTypes';

type FilterCriteria = {
  category: Category | 'All';
  date: string;
};

const ExpenseFilter: React.FC<{
  onFilterChange: (criteria: FilterCriteria) => void;
}> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<FilterCriteria>({
    category: 'All',
    date: '',
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = {
      ...filter,
      category: e.target.value as Category | 'All',
    };
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = { ...filter, date: e.target.value };
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="my-3">
      <div className="form-group">
        <label>Filter by Category:</label>
        <select
          className="form-control"
          value={filter.category}
          onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label>Filter by Date:</label>
        <input
          type="date"
          className="form-control"
          value={filter.date}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default ExpenseFilter;
