import CourseCard from '../../components/CourseCard/CourseCard';
import { courses } from '../../data/courses';
import styles from './CoursesPage.module.scss';

const CoursesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Все курсы</h1>
      <div className={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage; 