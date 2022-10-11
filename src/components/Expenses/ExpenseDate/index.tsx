import styles from './styles.module.css';

type TProps = {
  date: Date;
};

const ExpenseDate = ({ date }: TProps) => {
  const month = date.toLocaleString('en-us', { month: 'long' });
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__month']}>{month}</div>
      <div className={styles['expense-date__year']}>{year}</div>
      <div className={styles['expense-date__day']}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
