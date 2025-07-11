import { useState } from 'react';
import HomeworkCard from '../components/HomeworkCard/HomeworkCard';
import { homeworkList } from '../data/homework';
import styles from './HomeworkPage.module.scss';
import { FiInfo } from 'react-icons/fi';
import classNames from 'classnames';

type FilterStatus = 'all' | 'completed' | 'not_started';

const HomeworkPage = () => {
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filteredHomework = homeworkList.filter(hw => {
    if (filter === 'all') return true;
    return hw.status === filter;
  });

  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <FiInfo className={styles.infoIcon} />
        <div className={styles.infoContent}>
          <h1 className={styles.title}>Центр Заданий</h1>
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
        <button 
          className={classNames(styles.filterButton, {[styles.activeFilter]: filter === 'not_started'})}
          onClick={() => setFilter('not_started')}
        >
          Новые
        </button>
      </div>

      <div className={styles.homeworkGrid}>
        {filteredHomework.map((hw) => (
          <HomeworkCard
            key={hw.id}
            id={hw.id}
            title={hw.title}
            description={hw.description}
            status={hw.status}
            lessonId={hw.lessonId}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeworkPage; 