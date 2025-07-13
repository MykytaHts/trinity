import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.scss';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.toggleSwitch} title={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}>
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span className={styles.slider}>
        <span className={styles.handle}>
          <FaSun className={styles.sun} />
          <FaMoon className={styles.moon} />
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle; 