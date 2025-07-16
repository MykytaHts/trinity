import { Link } from 'react-router-dom';
import type { Lesson } from '../../data/courses';
import styles from './LessonNavigation.module.scss';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface LessonNavigationProps {
  prevLesson?: Lesson;
  nextLesson?: Lesson;
  courseId: string;
  sectionId: string;
}

const LessonNavigation = ({ prevLesson, nextLesson, courseId, sectionId }: LessonNavigationProps) => {
  return (
    <div className={styles.navigationContainer}>
      {prevLesson ? (
        <Link to={`/courses/${courseId}/${sectionId}/${prevLesson.id}`} className={styles.navLink}>
          <FiArrowLeft />
          <span>{prevLesson.title}</span>
        </Link>
      ) : (
        <div /> // Placeholder to keep alignment
      )}
      {nextLesson ? (
        <Link to={`/courses/${courseId}/${sectionId}/${nextLesson.id}`} className={`${styles.navLink} ${styles.next}`}>
          <span>{nextLesson.title}</span>
          <FiArrowRight />
        </Link>
      ) : (
        <div /> // Placeholder
      )}
    </div>
  );
};

export default LessonNavigation; 