import React, { useState } from 'react';
import styles from './SynthwaveTestPage.module.scss';
import classnames from 'classnames';

const SynthwaveTestPage = () => {
  const menuItems = ['Dashboard', 'Articles', 'Courses', 'Settings'];
  const sidebarItems = ['Profile', 'Achievements', 'Leaderboard', 'Logout'];

  const [activeItem, setActiveItem] = useState('Dashboard');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Profile');

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.scanlines}></div>

      <header className={styles.header}>
        <div className={styles.logo}>TRINITY</div>
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <a
              href="#"
              key={item}
              className={classnames(styles.navLink, {
                [styles.active]: activeItem === item,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <div className={styles.mainGrid}>
        <aside className={styles.sidebar}>
           <h3>// USER_DATA</h3>
          {sidebarItems.map((item) => (
            <a
              href="#"
              key={item}
              className={classnames(styles.sidebarLink, {
                [styles.active]: activeSidebarItem === item,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveSidebarItem(item);
              }}
            >
              {item}
            </a>
          ))}
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <h1>Synthwave Dreams</h1>
            <p>A demonstration of a retro-futuristic 80s theme.</p>
            <p>
              This environment uses neon glows, scanlines, and an animated grid
              background to create a distinct aesthetic.
            </p>
            <button className={styles.actionButton}>Engage Hyperdrive</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SynthwaveTestPage; 