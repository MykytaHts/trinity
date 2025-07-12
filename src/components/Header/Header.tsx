import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import ThemeToggle from '../ThemeToggle';
import { useState, useRef, useEffect } from 'react';
import ProfileDropdown from '../ProfileDropdown';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { FiMaximize, FiMinimize, FiMenu } from 'react-icons/fi';

interface HeaderProps {
  onToggleMobileMenu: () => void;
}

const Header = ({ onToggleMobileMenu }: HeaderProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Закрываем дропдаун при клике вне его области
  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuButton} onClick={onToggleMobileMenu}>
          <FiMenu />
        </button>
      </div>
      <nav className={styles.navigation}>
        <NavLink 
          to="/"
          className={({isActive}) => isActive ? styles.activeLink : styles.link}
          end
        >
          Дашборд
        </NavLink>
        <NavLink 
          to="/lessons"
          className={({isActive}) => isActive ? styles.activeLink : styles.link}
        >
          Все уроки
        </NavLink>
        <NavLink 
          to="/homework"
          className={({isActive}) => isActive ? styles.activeLink : styles.link}
        >
          Центр Заданий
        </NavLink>
      </nav>
      <div className={styles.headerControls}>
        <button className={styles.iconButton} onClick={toggleFullscreen}>
          {isFullscreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
        </button>
        <ThemeToggle />
        <div ref={dropdownRef}>
          <div className={styles.profile} onClick={() => setDropdownOpen(o => !o)}>
            <span>Mykyta Hotsii</span>
            <FaUserCircle size={24} className={styles.icon}/>
          </div>
          {isDropdownOpen && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header; 