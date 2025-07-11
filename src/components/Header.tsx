import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';
import { useState, useRef } from 'react';
import ProfileDropdown from './ProfileDropdown';
import useOnClickOutside from '../hooks/useOnClickOutside';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрываем дропдаун при клике вне его области
  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft} />
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