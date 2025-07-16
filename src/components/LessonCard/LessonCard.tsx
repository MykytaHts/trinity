import { Link } from 'react-router-dom';
import type { Lesson } from '../../data/courses';
import styles from './LessonCard.module.scss';
import { FiClock } from 'react-icons/fi';

interface LessonCardProps {
  lesson: Lesson;
  courseId: string;
  sectionId: string;
}

const LessonCard = ({ lesson, courseId, sectionId }: LessonCardProps) => {
  const durationInMinutes = Math.ceil(lesson.duration / 60);

  return (
    <Link to={`/courses/${courseId}/${sectionId}/${lesson.id}`} className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{lesson.title}</h3>
        <p className={styles.description}>{lesson.description}</p>
        <div className={styles.footer}>
          <div className={styles.duration}>
            <FiClock />
            <span>{durationInMinutes} мин.</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard; 