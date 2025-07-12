import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import styles from './MainLayout.module.scss';
import classNames from 'classnames';
import { ActiveSectionProvider } from '../context/ActiveSectionContext';

const MainLayout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const mainContentClasses = classNames(styles.mainContent, {
    [styles.sidebarCollapsed]: isSidebarCollapsed,
  });

  return (
    <ActiveSectionProvider>
      <div className={styles.appContainer}>
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <div className={styles.contentColumn}>
          <Header />
          <main className={mainContentClasses}>
            <Outlet />
          </main>
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default MainLayout; 