import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  as?: 'button' | 'link';
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button = ({
  children,
  onClick,
  as = 'button',
  to = '/',
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (as === 'link') {
    return (
      <Link to={to} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button; 