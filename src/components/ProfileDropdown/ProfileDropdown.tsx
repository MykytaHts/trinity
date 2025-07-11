import styles from './ProfileDropdown.module.scss';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ProfileDropdown = () => {
  return (
    <div className={styles.dropdown}>
      <NavLink to="/profile" className={styles.item}>
        <FaUser />
        <span>Профиль</span>
      </NavLink>
      <NavLink to="/settings" className={styles.item}>
        <FaCog />
        <span>Настройки</span>
      </NavLink>
      <a href="#" className={styles.item}>
        <FaSignOutAlt />
        <span>Выйти</span>
      </a>
    </div>
  );
};

export default ProfileDropdown; 