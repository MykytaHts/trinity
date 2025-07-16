import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { FiMenu, FiCode, FiMaximize, FiMinimize } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import classNames from 'classnames';

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

const Header = ({ onToggleMobileMenu }: HeaderProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuButton} onClick={onToggleMobileMenu}>
          <FiMenu />
        </button>
      </div>
      <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link} end>
          Дашборд
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Курсы
        </NavLink>
        <NavLink to="/homework" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Центр Заданий
        </NavLink>
      </nav>

      <div className={styles.mobileLogo}>
        <FiCode />
        <span>Trinity</span>
      </div>

      <div className={styles.headerControls}>
        <button className={classNames(styles.iconButton, styles.fullscreenButton)} onClick={toggleFullscreen}>
          {isFullscreen ? <FiMinimize size={22} /> : <FiMaximize size={22} />}
        </button>
        <ThemeToggle />
        <div ref={dropdownRef}>
          <div className={styles.profile} onClick={() => setDropdownOpen(o => !o)}>
            <span className={styles.profileName}>Mykyta Hotsii</span>
            <FaUserCircle size={24} className={styles.icon}/>
          </div>
          {isDropdownOpen && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header; 