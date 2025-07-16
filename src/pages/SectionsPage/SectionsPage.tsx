import { useParams } from 'react-router-dom';
import { courses, sections } from '../../data/courses';
import SectionCard from '../../components/SectionCard/SectionCard';
import styles from './SectionsPage.module.scss';

const SectionsPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  const course = courses.find(c => c.id === courseId);
  const courseSections = sections.filter(s => s.courseId === courseId);

  if (!course) {
    return <div>Курс не найден</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{course.title}</h1>
      <p className={styles.description}>{course.description}</p>
      <div className={styles.sectionsList}>
        {courseSections.map(section => (
          <SectionCard key={section.id} section={section} courseId={course.id} />
        ))}
      </div>
    </div>
  );
};

export default SectionsPage; 