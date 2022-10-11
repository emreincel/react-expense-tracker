import React from 'react';
import IExpenseModel from '../../../libs/models/expense.model';
import ExpenseItem from '../ExpenseItem';
import styles from './styles.module.css';

type TProps = {
  items: IExpenseModel[];
};

const ExpensesList = ({ items }: TProps) => {
  if (items.length === 0) {
    return (
      <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>
    );
  }

  return (
    <ul className={styles['expenses-list']}>
      {items.map(item => {
        return (
          <li key={item.id}>
            <ExpenseItem expense={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
