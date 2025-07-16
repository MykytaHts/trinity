import { NavLink, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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

  const renderDefaultNav = () => (
    <>
      <NavLink to="/courses" className={({ isActive }) => classNames(styles.menuItem, { [styles.active]: isActive || location.pathname.startsWith('/courses') })} end>
        <div className={styles.menuItemContent}>
          <FiGrid className={styles.icon} />
          {!isCollapsed && <span className={styles.text}>Курсы</span>}
        </div>
      </NavLink>
      {/* On a specific course page, show its sections under the main link */}
      {params.courseId && !params.sectionId && !isCollapsed && (
         <div className={styles.contextualNav}>
          {sections.filter(s => s.courseId === params.courseId).map(section => (
            <NavLink
              key={section.id}
              to={`/courses/${params.courseId}/${section.id}`}
              className={({ isActive }) => classNames(styles.contextualLink, { [styles.active]: isActive })}
            >
              {section.title}
            </NavLink>
          ))}
        </div>
      )}
      <NavLink to="/homework" className={({ isActive }) => classNames(styles.menuItem, { [styles.active]: isActive })} end>
        <div className={styles.menuItemContent}>
          <FiCheckSquare className={styles.icon} />
          {!isCollapsed && <span className={styles.text}>Домашки</span>}
        </div>
      </NavLink>
      <NavLink to="/tests" className={({ isActive }) => classNames(styles.menuItem, { [styles.active]: isActive })} end>
        <div className={styles.menuItemContent}>
          <FiClipboard className={styles.icon} />
          {!isCollapsed && <span className={styles.text}>Тесты</span>}
        </div>
      </NavLink>
    </>
  );

  const renderSectionNav = () => {
    if (!params.courseId || !params.sectionId) return null;

    const currentSection = sections.find(s => s.id === params.sectionId);
    const sectionLessons = lessons.filter(l => l.sectionId === params.sectionId);

    if (!currentSection) return null;

    return (
      <>
        <div className={styles.sectionHeader}>
          {!isCollapsed && (
            <button 
              className={styles.backButton} 
              onClick={() => navigate(`/courses/${params.courseId}`)}
              title="Назад к списку секций"
            >
              <FiChevronLeft />
            </button>
          )}
          {!isCollapsed && <h3 className={styles.sectionTitle}>{currentSection.title}</h3>}
        </div>
        <div className={styles.scrollableNav}>
          {sectionLessons.map(lesson => {
            const isLessonActive = params.lessonId === lesson.id;
            return (
              <div key={lesson.id} className={styles.lessonGroup}>
                <NavLink
                  to={`/courses/${params.courseId}/${params.sectionId}/${lesson.id}`}
                  className={({ isActive }) => classNames(styles.menuItem, { [styles.activeLessonLink]: isActive })}
                >
                  <div className={styles.menuItemContent}>
                    <FiBookOpen className={styles.icon} />
                    {!isCollapsed && <span className={styles.text}>{lesson.title}</span>}
                  </div>
                </NavLink>
                <ul className={classNames(styles.subSectionList, { [styles.collapsed]: !isLessonActive || isCollapsed })}>
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
              </div>
            );
          })}
        </div>
      </>
    );
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
        {params.sectionId ? renderSectionNav() : renderDefaultNav()}
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