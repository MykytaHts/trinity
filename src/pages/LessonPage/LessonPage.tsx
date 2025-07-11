import { useParams, useLocation } from 'react-router-dom';
import { lessons } from '../../data/lessons';
import LessonNavigation from '../../components/LessonNavigation';
import styles from './LessonPage.module.scss';
import { useEffect } from 'react';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  const lessonIndex = lessons.findIndex(l => l.id === lessonId);
  const lesson = lessons[lessonIndex];

  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : undefined;
  const nextLesson = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : undefined;

  if (!lesson) {
    return <div>Урок не найден!</div>;
  }

  return (
    <div className={styles.lessonContainer}>
      {lesson.imageUrl && <img src={lesson.imageUrl} alt={lesson.title} className={styles.lessonHeaderImage} />}
      <h1 className={styles.lessonTitle}>{lesson.title}</h1>
      {lesson.sections.map(section => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2>{section.title}</h2>
          {section.content && (
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
        </section>
      ))}
      <LessonNavigation prevLesson={prevLesson} nextLesson={nextLesson} />
    </div>
  );
};

export default LessonPage; 