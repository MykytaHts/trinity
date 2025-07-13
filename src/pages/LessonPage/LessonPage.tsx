import { useParams, useLocation } from 'react-router-dom';
import { lessons } from '../../data/lessons';
import styles from './LessonPage.module.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import { sampleQuiz } from '../../data/quizzes';
import { useActiveSection } from '../../context/ActiveSectionContext';
import LessonNavigation from '../../components/LessonNavigation';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const location = useLocation();
  const { setActiveSection } = useActiveSection();
  const lesson = lessons.find(l => l.id === lessonId);
  

  // Effect for click: Immediately set the active section from the hash for instant feedback.
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      setActiveSection(id);
    }
  }, [location.hash, setActiveSection]);

  // Effect for scroll: Scroll the page to the correct section.
  useLayoutEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      // A small delay ensures the element is rendered before scrolling.
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
        // Scroll to top if no hash is present (e.g., on initial lesson load).
        window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Effect for scroll-spy: Implements scroll-spying using Intersection Observer API.
  useEffect(() => {
    if (!lesson?.sections?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Defines a horizontal line 150px from the top of the viewport.
        // A section becomes "active" when its top edge crosses this line.
        rootMargin: '-150px 0px -75% 0px',
        threshold: 0,
      }
    );

    // Observe all section elements.
    lesson.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts.
    return () => {
      lesson.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [lesson, setActiveSection]);

  const prevLesson = lesson ? lessons[lessons.findIndex(l => l.id === lessonId) - 1] : undefined;
  const nextLesson = lesson ? lessons[lessons.findIndex(l => l.id === lessonId) + 1] : undefined;
  
  if (!lesson) {
    return <div>Урок не найден!</div>;
  }

  return (
    <div className={styles.lessonContainer}>
      <h1 className={styles.lessonTitle}>{lesson.title}</h1>
      {lesson.sections.map(section => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2>{section.title}</h2>
          {section.content && (
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
        </section>
      ))}
      <Quiz quiz={sampleQuiz} />
      <LessonNavigation prevLesson={prevLesson} nextLesson={nextLesson} />
    </div>
  );
};

export default LessonPage; 

