import { Link } from 'react-router-dom';
import styles from './LessonNavigation.module.scss';
import classNames from 'classnames';

interface LessonInfo {
  id: string;
  title: string;
}

interface LessonNavigationProps {
  prevLesson?: LessonInfo;
  nextLesson?: LessonInfo;
}

const LessonNavigation = ({ prevLesson, nextLesson }: LessonNavigationProps) => {
  return (
    <nav className={styles.navigation}>
      {prevLesson ? (
        <Link to={`/lessons/${prevLesson.id}`} className={classNames(styles.navLink, styles.prev)}>
          <span className={styles.label}>Предыдущий урок</span>
          <span className={styles.title}>{prevLesson.title}</span>
        </Link>
      ) : <div className={styles.placeholder} />}
      
      {nextLesson ? (
        <Link to={`/lessons/${nextLesson.id}`} className={classNames(styles.navLink, styles.next)}>
          <span className={styles.label}>Следующий урок</span>
          <span className={styles.title}>{nextLesson.title}</span>
        </Link>
      ) : <div className={styles.placeholder} />}
    </nav>
  );
};

export default LessonNavigation; 