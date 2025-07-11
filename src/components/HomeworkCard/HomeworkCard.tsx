import Button from '../Button/Button';
import styles from './HomeworkCard.module.scss';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';
import classNames from 'classnames';
import { lessons } from '../../data/lessons';
import { Link } from 'react-router-dom';

interface HomeworkCardProps {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'not_started';
  lessonId: string;
}

const statusTextMap = {
  completed: 'Пройдено',
  not_started: 'Не пройдено',
}

const HomeworkCard = ({ id, title, description, status, lessonId }: HomeworkCardProps) => {
  const cardClasses = classNames(styles.card, styles[status]);
  const lesson = lessons.find(l => l.id === lessonId);

  return (
    <div className={cardClasses}>
      <div className={styles.statusLabel}>{statusTextMap[status]}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {lesson && (
          <Link to={`/lessons/${lesson.id}`} className={styles.lessonLink}>
            <FiBookOpen />
            <span>К уроку: {lesson.title}</span>
          </Link>
        )}
        <p className={styles.description}>{description}</p>
      </div>
      <Button as="link" to={`/homework/${id}`} variant="primary" className={styles.button}>
        <span>{status === 'completed' ? 'Повторить' : 'Начать'}</span>
        <FiArrowRight />
      </Button>
    </div>
  );
};

export default HomeworkCard; 