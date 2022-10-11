import React, { useState } from 'react';
import IExpenseModel from './../../../libs/models/expense.model';
import styles from './styles.module.css';
import Card from '../../UI/Card';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../ExpensesList';
import ExpensesChart from '../ExpensesChart';

type TProps = {
  items: IExpenseModel[];
};

const Expenses = ({ items }: TProps) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={styles['expenses']}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
