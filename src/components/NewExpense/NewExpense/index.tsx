import React, { useState } from 'react';
import styles from './styles.module.css';
import ExpenseForm from '../ExpenseForm';
import IExpenseModel from '../../../libs/models/expense.model';

type TProps = {
  onAddExpense: (expense: IExpenseModel) => void;
};

const NewExpense = ({ onAddExpense }: TProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseModel) => {
    onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles['new-expense']}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
