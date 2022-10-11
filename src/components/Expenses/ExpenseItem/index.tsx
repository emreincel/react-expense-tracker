import React from 'react';
import styles from './styles.module.css';
import IExpenseModel from '../../../libs/models/expense.model';
import ExpenseDate from '../ExpenseDate';
import Card from '../../UI/Card';

type TProps = {
  expense: IExpenseModel;
};

const ExpenseItem = ({ expense }: TProps) => {
  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={expense.date} />
      <div className={styles['expense-item__description']}>
        <h2>{expense.title}</h2>
        <div className={styles['expense-item__price']}>${expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
