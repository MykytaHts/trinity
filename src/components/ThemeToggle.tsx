import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.toggleSwitch} title={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}>
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeToggle; 