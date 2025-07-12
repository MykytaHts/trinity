import classNames from 'classnames';
import styles from './Label.module.scss';

type LabelVariant = 'easy' | 'medium' | 'hard' | 'in_progress' | 'completed' | 'default';

interface LabelProps {
  children: React.ReactNode;
  variant: LabelVariant;
  className?: string;
}

const Label = ({ children, variant, className }: LabelProps) => {
  const labelClasses = classNames(
    styles.label,
    styles[variant],
    className
  );

  return (
    <div className={labelClasses}>
      {children}
    </div>
  );
};

export default Label; 