import { Link } from 'react-router-dom';
import type { Section } from '../../data/courses';
import styles from './SectionCard.module.scss';

interface SectionCardProps {
  section: Section;
  courseId: string;
}

const SectionCard = ({ section, courseId }: SectionCardProps) => {
  return (
    <Link to={`/courses/${courseId}/${section.id}`} className={styles.card}>
      <h3 className={styles.title}>{section.title}</h3>
      <p className={styles.description}>{section.description}</p>
    </Link>
  );
};

export default SectionCard; 