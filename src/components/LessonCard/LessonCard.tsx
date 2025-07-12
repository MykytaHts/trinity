import { Link } from 'react-router-dom';
import type { Lesson } from '../../types/lesson';
import styles from './LessonCard.module.scss';
import { FaStream } from 'react-icons/fa';
import classNames from 'classnames';
import { FiGrid } from 'react-icons/fi';
import Label from '../Label/Label';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  status: LessonStatus;
  sectionsCount: number;
}

type LessonStatus = 'not_started' | 'in_progress' | 'completed';

const statusTextMap: Record<LessonStatus, string> = {
  not_started: 'Не начат',
  in_progress: 'В процессе',
  completed: 'Пройден',
};

const LessonCard = ({ id, title, description, status, sectionsCount }: LessonCardProps) => {
  return (
    <a href={`/lessons/${id}`} className={styles.card}>
       {status !== 'not_started' && (
        <Label variant={status} className={styles.statusLabel}>
          {statusTextMap[status]}
        </Label>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <div className={styles.sections}>
            <FiGrid />
            <span>
              {sectionsCount} {sectionsCount === 1 ? 'секция' : 'секций'}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LessonCard; 