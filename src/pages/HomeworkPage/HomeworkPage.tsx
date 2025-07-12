import { useState } from 'react';
import HomeworkCard from '../../components/HomeworkCard';
import { homeworkList } from '../../data/homework';
import styles from './HomeworkPage.module.scss';
import { FiInfo } from 'react-icons/fi';
import classNames from 'classnames';
import Button from '../../components/Button';
import type { Difficulty } from '../../types/homework';

type FilterStatus = 'all' | 'completed';
type DifficultyFilter = 'all' | Difficulty;

const ITEMS_PER_PAGE = 3;

const HomeworkPage = () => {
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHomework = homeworkList.filter(hw => {
    const statusMatch = filter === 'all' || hw.status === filter;
    const difficultyMatch = difficultyFilter === 'all' || hw.difficulty === difficultyFilter;
    return statusMatch && difficultyMatch;
  });

  const totalPages = Math.ceil(filteredHomework.length / ITEMS_PER_PAGE);
  const paginatedHomework = filteredHomework.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Центр Заданий</h1>
      <div className={styles.infoBlock}>
        <FiInfo className={styles.infoIcon} />
        <div className={styles.infoContent}>
          <p className={styles.subtitle}>
            Здесь собраны все практические задания. Примените знания, полученные на уроках,
            чтобы отточить свои навыки программирования на Rust.
          </p>
        </div>
      </div>

      <div className={styles.filterContainer}>
        <button 
          className={classNames(styles.filterButton, {[styles.activeFilter]: filter === 'all'})}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button 
          className={classNames(styles.filterButton, {[styles.activeFilter]: filter === 'completed'})}
          onClick={() => setFilter('completed')}
        >
          Пройденные
        </button>
        <div className={styles.selectWrapper}>
          <select 
            className={styles.difficultySelect}
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as DifficultyFilter)}
          >
            <option value="all">Все уровни</option>
            <option value="easy">Легкий</option>
            <option value="medium">Средний</option>
            <option value="hard">Сложный</option>
          </select>
        </div>
      </div>

      <div className={styles.homeworkGrid}>
        {paginatedHomework.map((hw) => (
          <HomeworkCard
            key={hw.id}
            id={hw.id}
            title={hw.title}
            description={hw.description}
            status={hw.status}
            lessonId={hw.lessonId}
            difficulty={hw.difficulty}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Назад
          </Button>
          <span className={styles.pageInfo}>
            Страница {currentPage} из {totalPages}
          </span>
          <Button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Вперед
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeworkPage; 