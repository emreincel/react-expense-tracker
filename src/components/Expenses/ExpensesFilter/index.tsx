import React from 'react';
import styles from './styles.module.css';

type TProps = {
  onChangeFilter: (filterData: string) => void;
  selected: string;
};

const ExpensesFilter = ({ onChangeFilter, selected }: TProps) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className={styles['expenses-filter']}>
      <div className={styles['expenses-filter__control']}>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
