import styles from './styles.module.css';

type TProps = {
  className: string;
  children: JSX.Element | JSX.Element[];
};

const Card = ({ children, className }: TProps) => {
  const classes = `${className} ${styles['card']}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
