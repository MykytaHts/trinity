import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';
import styles from './MainLayout.module.scss';
import classNames from 'classnames';
import { ActiveSectionProvider } from '../context/ActiveSectionContext';

const MainLayout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainContentClasses = classNames(styles.mainContent, {
    [styles.sidebarCollapsed]: isSidebarCollapsed,
  });

  return (
    <ActiveSectionProvider>
      <div className={styles.appContainer}>
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar}
          isMobileOpen={isMobileMenuOpen}
          closeMobileMenu={toggleMobileMenu}
        />
        <div className={styles.contentColumn}>
          <Header onToggleMobileMenu={toggleMobileMenu} />
          <main className={mainContentClasses}>
            <Outlet />
          </main>
        </div>
        {isMobileMenuOpen && <div className={styles.overlay} onClick={toggleMobileMenu} />}
      </div>
    </ActiveSectionProvider>
  );
};

export default MainLayout; 