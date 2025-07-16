import { useParams, useLocation } from 'react-router-dom';
import { lessons } from '../../data/courses';
import styles from './LessonPage.module.scss';
import { useEffect, useLayoutEffect } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import { sampleQuiz } from '../../data/quizzes';
import LessonNavigation from '../../components/LessonNavigation/LessonNavigation';
import { useActiveSubSection } from '../../context/ActiveSubSectionContext';

const LessonPage = () => {
  const { courseId, sectionId, lessonId } = useParams<{ courseId: string; sectionId: string; lessonId: string }>();
  const location = useLocation();
  const { setActiveSubSection } = useActiveSubSection();

  const lesson = lessons.find(l => l.id === lessonId);
  const sectionLessons = lessons.filter(l => l.sectionId === sectionId);
  const lessonIndex = sectionLessons.findIndex(l => l.id === lessonId);
  
  const prevLesson = lessonIndex > 0 ? sectionLessons[lessonIndex - 1] : undefined;
  const nextLesson = lessonIndex < sectionLessons.length - 1 ? sectionLessons[lessonIndex + 1] : undefined;

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      setActiveSubSection(id);
    } else if (lesson?.subSections?.[0]) {
      // If no hash, set first subsection as active
      setActiveSubSection(lesson.subSections[0].id);
    }
  }, [location.hash, lesson, setActiveSubSection]);

  useLayoutEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
        window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!lesson?.subSections?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSubSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-150px 0px -75% 0px',
        threshold: 0,
      }
    );

    lesson.subSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      lesson.subSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [lesson, setActiveSubSection]);
  
  if (!lesson) {
    return <div>Урок не найден!</div>;
  }

  return (
    <div className={styles.lessonContainer}>
      <h1 className={styles.lessonTitle}>{lesson.title}</h1>
      {lesson.subSections.map(subSection => (
        <section key={subSection.id} id={subSection.id} className={styles.section}>
          <h2>{subSection.title}</h2>
          {subSection.content && (
            <div dangerouslySetInnerHTML={{ __html: subSection.content }} />
          )}
        </section>
      ))}
      <Quiz quiz={sampleQuiz} />
      <LessonNavigation 
        prevLesson={prevLesson} 
        nextLesson={nextLesson} 
        courseId={courseId!} 
        sectionId={sectionId!} 
      />
    </div>
  );
};

export default LessonPage; 

