import { useState } from 'react';
import HomeworkCard from '../../components/HomeworkCard';
import { homeworkList } from '../../data/homework';
import styles from './HomeworkPage.module.scss';
import type { Difficulty } from '../../types/homework';
import Pagination from '../../components/Pagination/Pagination';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import type { FilterOption } from '../../components/FilterGroup/FilterGroup';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

type StatusFilter = 'all' | 'completed';
type DifficultyFilter = 'all' | Difficulty;

const ITEMS_PER_PAGE = 3;

const statusFilterOptions: FilterOption<StatusFilter>[] = [
  { value: 'all', label: 'Все' },
  { value: 'completed', label: 'Пройденные' },
];

const HomeworkPage = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHomework = homeworkList.filter(hw => {
    const statusMatch = statusFilter === 'all' || hw.status === statusFilter;
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
      <InfoBlock 
        id="homework-welcome" 
        title="Добро пожаловать в Центр Заданий!"
        className={styles.infoBlock}
      >
        <p>
          Здесь собраны все практические задания. Примените знания, полученные на уроках, чтобы отточить свои навыки программирования на Rust.
        </p>
      </InfoBlock>

      <div className={styles.controlsContainer}>
        <FilterGroup
          options={statusFilterOptions}
          activeFilter={statusFilter}
          onFilterChange={setStatusFilter}
        />
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
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomeworkPage; 