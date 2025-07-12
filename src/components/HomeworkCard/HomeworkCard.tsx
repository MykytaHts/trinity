import Button from '../../components/Button';
import styles from './HomeworkCard.module.scss';
import { FiArrowRight, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import classNames from 'classnames';
import { lessons } from '../../data/lessons';
import { Link } from 'react-router-dom';
import type { Difficulty } from '../../types/homework';

interface HomeworkCardProps {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'not_started';
  lessonId: string;
  difficulty: Difficulty;
}

const difficultyTextMap = {
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Сложный',
}

const HomeworkCard = ({ id, title, description, status, lessonId, difficulty }: HomeworkCardProps) => {
  const cardClasses = classNames(styles.card, styles[status]);
  const lesson = lessons.find(l => l.id === lessonId);

  return (
    <div className={cardClasses}>
      <div className={styles.cardBody}>
        <div className={styles.leftColumn}>
          <div className={styles.titleWrapper}>
            {status === 'completed' && <FiCheckCircle className={styles.completedIcon} />}
            <h3 className={styles.title}>{title}</h3>
          </div>
          <p className={styles.description}>{description}</p>
          {lesson && (
            <Link to={`/lessons/${lesson.id}`} className={styles.lessonLink}>
              <FiBookOpen />
              <span>Перейти к уроку</span>
            </Link>
          )}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.labelsContainer}>
            <div className={classNames(styles.label, styles.difficultyLabel, styles[difficulty])}>{difficultyTextMap[difficulty]}</div>
          </div>
          <Button as="link" to={`/homework/${id}`} variant="primary" className={styles.button}>
            <span>{status === 'completed' ? 'Повторить' : 'Начать'}</span>
            <FiArrowRight className={styles.buttonIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeworkCard; 