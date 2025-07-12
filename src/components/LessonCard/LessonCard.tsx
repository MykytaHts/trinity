import { Link } from 'react-router-dom';
import type { Lesson } from '../../types/lesson';
import styles from './LessonCard.module.scss';
import { FaStream } from 'react-icons/fa';
import classNames from 'classnames';
import { FiGrid } from 'react-icons/fi';

interface LessonCardProps {
  lesson: Lesson;
}

const statusTextMap = {
  not_started: 'Не начато',
  in_progress: 'В процессе',
  completed: 'Завершено',
};

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Link to={`/lessons/${lesson.id}`} className={styles.card}>
      <div className={classNames(styles.statusLabel, styles[lesson.status])}>
        {statusTextMap[lesson.status]}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{lesson.title}</h3>
        {lesson.description && <p className={styles.description}>{lesson.description}</p>}
        <div className={styles.footer}>
          <div className={styles.sections}>
            <FiGrid />
            <span>
              {lesson.sections.length} {lesson.sections.length === 1 ? 'секция' : 'секций'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard; 