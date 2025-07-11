import { lessons } from '../data/lessons';
import LessonCard from '../components/LessonCard';
import styles from './LessonCatalogPage.module.scss';

const LessonCatalogPage = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.title}>Все уроки</h1>
      <div className={styles.grid}>
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonCatalogPage; 