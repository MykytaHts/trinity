import { useParams } from 'react-router-dom';
import LessonCard from '../../components/LessonCard/LessonCard';
import { lessons, sections } from '../../data/courses';
import styles from './LessonsListPage.module.scss';
import Pagination from '../../components/Pagination';
import { useState } from 'react';

const ITEMS_PER_PAGE = 6;

const LessonsListPage = () => {
  const { courseId, sectionId } = useParams<{ courseId: string; sectionId: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const section = sections.find(s => s.id === sectionId && s.courseId === courseId);
  const sectionLessons = lessons.filter(l => l.sectionId === sectionId);
  
  const totalPages = Math.ceil(sectionLessons.length / ITEMS_PER_PAGE);
  const paginatedLessons = sectionLessons.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (!section) {
    return <div>Раздел не найден</div>;
  }

  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.title}>{section.title}</h1>
      <p className={styles.description}>{section.description}</p>
      <div className={styles.grid}>
        {paginatedLessons.map(lesson => (
          <LessonCard 
            key={lesson.id}
            lesson={lesson}
            courseId={courseId!}
            sectionId={sectionId!}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default LessonsListPage; 