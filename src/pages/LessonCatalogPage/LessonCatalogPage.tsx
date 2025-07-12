import { useState } from 'react';
import LessonCard from '../../components/LessonCard';
import { lessons } from '../../data/lessons';
import styles from './LessonCatalogPage.module.scss';
import Pagination from '../../components/Pagination';

const ITEMS_PER_PAGE = 6;

const LessonCatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(lessons.length / ITEMS_PER_PAGE);
  const paginatedLessons = lessons.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.title}>Все уроки</h1>
      <div className={styles.grid}>
        {paginatedLessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
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

export default LessonCatalogPage; 