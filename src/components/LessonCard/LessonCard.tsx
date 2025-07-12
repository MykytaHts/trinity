import { Link } from 'react-router-dom';
import type { Lesson } from '../../types/lesson';
import styles from './LessonCard.module.scss';
import { FaStream } from 'react-icons/fa';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Link to={`/lessons/${lesson.id}`} className={styles.card}>
      {/* <div className={styles.imageContainer}>
        {lesson.imageUrl && <img src={lesson.imageUrl} alt={lesson.title} />}
      </div> */}
      <div className={styles.content}>
        <h3 className={styles.title}>{lesson.title}</h3>
        {lesson.description && <p className={styles.description}>{lesson.description}</p>}
        <div className={styles.footer}>
          <div className={styles.sections}>
            <FaStream />
            <span>{lesson.sections.length} секций</span>
          </div>
          {/* Placeholder for difficulty or status */}
        </div>
      </div>
    </Link>
  );
};

export default LessonCard; 