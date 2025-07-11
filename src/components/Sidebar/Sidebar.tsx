import { NavLink } from 'react-router-dom';
import { lessons } from '../../data/lessons';
import styles from './Sidebar.module.scss';
import {
  FiChevronDown,
  FiChevronRight,
  FiCode,
  FiClipboard, // Changed from FiFileText
  FiHome,
  FiTarget,
  FiBook,
} from 'react-icons/fi';
import { useState } from 'react';
import { homeworkList } from '../../data/homework'; // Ensured direct path

const Sidebar = () => {
  const [openLessons, setOpenLessons] = useState<Set<string>>(new Set());

  const toggleLesson = (id: string) => {
    setOpenLessons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <FiCode className={styles.logo} />
        <span>Trinity</span>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
          <FiHome />
          Дашборд
        </NavLink>
        <NavLink
          to="/lessons"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          <FiBook />
          Все уроки
        </NavLink>
         <NavLink
          to="/homework"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          <FiTarget />
          Центр Заданий
        </NavLink>

        <div className={styles.divider}></div>
        <h3 className={styles.menuTitle}>Курс по Rust</h3>

        {lessons.map((lesson) => {
          const lessonHomeworks = homeworkList.filter((hw) => hw.lessonId === lesson.id);
          const hasHomework = lessonHomeworks.length > 0;
          const isOpen = openLessons.has(lesson.id);

          return (
            <div key={lesson.id} className={styles.lessonGroup}>
              <div className={styles.lessonLinkContainer}>
                <NavLink
                  to={`/lessons/${lesson.id}`}
                  className={({ isActive }) => `${styles.link} ${styles.lessonLink} ${isActive ? styles.activeLesson : ''}`}
                  end
                >
                  {lesson.title}
                </NavLink>
                {hasHomework && (
                  <button onClick={() => toggleLesson(lesson.id)} className={styles.toggleButton}>
                    {isOpen ? <FiChevronDown /> : <FiChevronRight />}
                  </button>
                )}
              </div>
              {hasHomework && isOpen && (
                <div className={styles.homeworkSubmenu}>
                  {lessonHomeworks.map((hw) => (
                    <NavLink
                      key={hw.id}
                      to={`/homework/${hw.id}`}
                      className={({ isActive }) => `${styles.link} ${styles.sublink} ${isActive ? styles.active : ''}`}
                    >
                      <FiClipboard />
                      {hw.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <div className={styles.footer}>
        <p>© 2024 Trinity</p>
      </div>
    </aside>
  );
};

export default Sidebar; 