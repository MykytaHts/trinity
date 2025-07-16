import { Link } from 'react-router-dom';
import type { Course } from '../../data/courses';
import styles from './CourseCard.module.scss';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/courses/${course.id}`} className={styles.card}>
      <img src={course.image} alt={course.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
      </div>
    </Link>
  );
};

export default CourseCard; 