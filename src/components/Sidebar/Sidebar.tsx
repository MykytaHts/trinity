import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiGrid, FiBookOpen, FiChevronDown, FiChevronRight, FiCode, FiSettings, FiChevronLeft } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { lessons } from '../../data/lessons'; // Adjusted path
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);

  const lessonIdFromPath = location.pathname.split('/lessons/')[1]?.split('#')[0];

  useEffect(() => {
    if (lessonIdFromPath) {
      setOpenLessonId(lessonIdFromPath);
    }
  }, [lessonIdFromPath]);

  const toggleLesson = (lessonId: string) => {
    setOpenLessonId(prevId => (prevId === lessonId ? null : lessonId));
  };

  const sidebarClasses = classNames(styles.sidebar, {
    [styles.collapsed]: isCollapsed,
  });

  const menuItemClasses = (isActive: boolean) => classNames(styles.menuItem, {
    [styles.active]: isActive,
  });

  return (
    <aside className={sidebarClasses}>
      <div className={styles.sidebarHeader}>
        <Link to="/" className={styles.logo}>
          <FiCode className={styles.logoIcon} />
          {!isCollapsed && <span className={styles.logoText}>Trinity</span>}
        </Link>
      </div>

      <nav className={styles.nav}>
        <div className={styles.lessonGroup}>
           <NavLink
              to="/lessons"
              className={({ isActive }) => menuItemClasses(isActive)}
              end
            >
              <div className={styles.menuItemContent}>
                <FiGrid className={styles.icon} />
                {!isCollapsed && <span className={styles.text}>Все уроки</span>}
              </div>
            </NavLink>
        </div>
        {lessons.map(lesson => {
          const isLessonOpen = openLessonId === lesson.id;
          const isLessonActive = lesson.id === lessonIdFromPath;

          const lessonGroupClasses = classNames(styles.lessonGroup, {
            [styles.activeLessonGroup]: isLessonActive
          });

          return (
            <div key={lesson.id} className={lessonGroupClasses}>
              <div
                className={menuItemClasses(isLessonActive)}
                onClick={() => toggleLesson(lesson.id)}
              >
                <div className={styles.menuItemContent}>
                  <FiBookOpen className={styles.icon} />
                  {!isCollapsed && <span className={styles.text}>{lesson.title}</span>}
                </div>
                {!isCollapsed && (isLessonOpen ? <FiChevronDown className={styles.chevron}/> : <FiChevronRight className={styles.chevron}/>)}
            </div>

              <div className={classNames(styles.sectionMenu, {[styles.open]: !isCollapsed && isLessonOpen})}>
                  <NavLink
                    to={`/lessons/${lesson.id}`}
                    className={({ isActive }) => classNames(styles.sectionLink, {
                        [styles.activeSection]: isActive && location.hash === ''
                    })}
                    end
                  >
                    Обзор урока
                  </NavLink>
                  {lesson.sections.map(section => (
                    <NavLink
                      key={section.id}
                      to={`/lessons/${lesson.id}#${section.id}`}
                      className={classNames(styles.sectionLink, {
                        [styles.activeSection]: location.hash === `#${section.id}`
                      })}
                    >
                      {section.title}
                    </NavLink>
                  ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
          <NavLink to="/settings" className={({isActive}) => classNames(styles.menuItem, {[styles.active]: isActive})}>
          <div className={styles.menuItemContent}>
              <FiSettings className={styles.icon} />
              {!isCollapsed && <span className={styles.text}>Настройки</span>}
            </div>
          </NavLink>
          <div className={styles.toggleButtonWrapper}>
            <button onClick={toggleSidebar} className={styles.toggleButton}>
                {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar; 