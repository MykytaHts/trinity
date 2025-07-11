import Button from './Button/Button';
import styles from './HomeworkCard.module.scss';
import { FiClipboard, FiArrowRight } from 'react-icons/fi';

interface HomeworkCardProps {
  id: string;
  title: string;
  description: string;
}

const HomeworkCard = ({ id, title, description }: HomeworkCardProps) => {
  return (
    <div className={styles.card}>
      <FiClipboard className={styles.icon} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <Button as="link" to={`/homework/${id}`} variant="primary" className={styles.button}>
        <FiArrowRight />
      </Button>
    </div>
  );
};

export default HomeworkCard; 