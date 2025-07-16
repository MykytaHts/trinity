import { NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { FiGrid, FiCode, FiSettings, FiChevronLeft, FiChevronRight, FiX, FiCheckSquare, FiClipboard, FiBookOpen } from 'react-icons/fi';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';
import { sections, lessons } from '../../data/courses';
import { useActiveSubSection } from '../../context/ActiveSubSectionContext';
import type { MouseEvent } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  isMobileOpen: boolean;
  closeMobileMenu: () => void;
}

const Sidebar = ({ isCollapsed, toggleSidebar, isMobileOpen, closeMobileMenu }: SidebarProps) => {
  const params = useParams<{ courseId?: string; sectionId?: string; lessonId?: string }>();
  const location = useLocation();
  const { activeSubSection } = useActiveSubSection();

  const handleSubSectionClick = (e: MouseEvent<HTMLAnchorElement>, subId: string) => {
    e.preventDefault();
    const element = document.getElementById(subId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Manually update url hash for history and correct url state
      window.history.pushState(null, '', `#${subId}`);
    }
  };

  const sidebarClasses = classNames(styles.sidebar, {
    [styles.collapsed]: isCollapsed,
    [styles.mobileOpen]: isMobileOpen,
  });

  const menuItemClasses = (isActive: boolean) => classNames(styles.menuItem, {
    [styles.active]: isActive,
  });

  const renderContextualNav = () => {
    if (isCollapsed) return null;

    // On a specific course page, show its sections
    if (params.courseId && !params.sectionId) {
      const courseSections = sections.filter(s => s.courseId === params.courseId);
      return (
        <div className={styles.contextualNav}>
          {courseSections.map(section => (
            <NavLink
              key={section.id}
              to={`/courses/${params.courseId}/${section.id}`}
              className={({ isActive }) => classNames(styles.contextualLink, { [styles.active]: isActive })}
            >
              {section.title}
            </NavLink>
          ))}
        </div>
      );
    }

    // On a specific section or lesson page, show lessons of that section
    if (params.courseId && params.sectionId) {
      const sectionLessons = lessons.filter(l => l.sectionId === params.sectionId);
      return (
        <div className={styles.contextualNav}>
          {sectionLessons.map(lesson => {
            const isLessonActive = params.lessonId === lesson.id;
            return (
              <div key={lesson.id}>
                <NavLink
                  to={`/courses/${params.courseId}/${params.sectionId}/${lesson.id}`}
                  className={() => classNames(styles.contextualLink, { [styles.active]: isLessonActive })}
                >
                  <FiBookOpen size={14} />
                  <span>{lesson.title}</span>
                </NavLink>
                {isLessonActive && !isCollapsed && lesson.subSections.length > 0 && (
                  <ul className={styles.subSectionList}>
                    {lesson.subSections.map(sub => (
                      <li key={sub.id} className={styles.subSectionItem}>
                        <a 
                          href={`#${sub.id}`}
                          onClick={(e) => handleSubSectionClick(e, sub.id)}
                          className={classNames(styles.subSectionLink, {
                            [styles.activeSubSection]: activeSubSection === sub.id
                          })}
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <aside className={sidebarClasses}>
      <div className={styles.sidebarHeader}>
        <Link to="/" className={styles.logo}>
          <FiCode className={styles.logoIcon} />
          {!isCollapsed && <span className={styles.logoText}>Trinity</span>}
        </Link>
        <button className={styles.closeButton} onClick={closeMobileMenu}>
          <FiX />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/courses" className={({ isActive }) => menuItemClasses(location.pathname.startsWith('/courses') || isActive)} end>
          <div className={styles.menuItemContent}>
            <FiGrid className={styles.icon} />
            {!isCollapsed && <span className={styles.text}>Курсы</span>}
          </div>
        </NavLink>
        {renderContextualNav()}
        <NavLink to="/homework" className={({ isActive }) => menuItemClasses(isActive)} end>
          <div className={styles.menuItemContent}>
            <FiCheckSquare className={styles.icon} />
            {!isCollapsed && <span className={styles.text}>Домашки</span>}
          </div>
        </NavLink>
        <NavLink to="/tests" className={({ isActive }) => menuItemClasses(isActive)} end>
          <div className={styles.menuItemContent}>
            <FiClipboard className={styles.icon} />
            {!isCollapsed && <span className={styles.text}>Тесты</span>}
          </div>
        </NavLink>
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