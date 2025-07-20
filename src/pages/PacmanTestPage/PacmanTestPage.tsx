import React, { useState } from 'react';
import styles from './PacmanTestPage.module.scss';
import classnames from 'classnames';

const PacmanTestPage = () => {
  const menuItems = ['Dashboard', 'Articles', 'Courses', 'Settings'];
  const sidebarItems = ['Profile', 'Achievements', 'Leaderboard', 'Logout'];

  const [activeItem, setActiveItem] = useState('Dashboard');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Profile');

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <div
              key={item}
              className={classnames(styles.navItemWrapper, {
                [styles.active]: activeItem === item,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item);
              }}
            >
              <a href="#" className={styles.navLink}>
                {item}
              </a>
              <div className={styles.dot}></div>
            </div>
          ))}
        </nav>
        <div className={styles.ghosts}>
          <div className={classnames(styles.ghost, styles.blinky)}></div>
          <div className={classnames(styles.ghost, styles.pinky)}></div>
          <div className={classnames(styles.ghost, styles.inky)}></div>
          <div className={classnames(styles.ghost, styles.clyde)}></div>
        </div>
      </header>
      <div className={styles.mainGrid}>
        <aside className={styles.sidebar}>
          {sidebarItems.map((item) => (
            <a
              href="#"
              key={item}
              className={classnames(styles.sidebarLink, {
                [styles.sidebarActive]: activeSidebarItem === item,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveSidebarItem(item);
              }}
            >
              <span className={styles.powerPellet}></span>
              {item}
            </a>
          ))}
        </aside>
        <main className={styles.mainContent}>
          <h1>Welcome to Pacman-Land!</h1>
          <p>This is a sandboxed area to test the new theme.</p>
          <p>
            The active navigation link is "eaten" by an animated Pacman that
            appears below!
          </p>
        </main>
      </div>
    </div>
  );
};

export default PacmanTestPage; 