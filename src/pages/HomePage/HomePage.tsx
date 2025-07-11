import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>Добро пожаловать на платформу Trinity!</h1>
      <h2 className={styles.subtitle}>Это главная страница. Выберите урок из меню слева, чтобы начать обучение.</h2>
      <p className={styles.text}>Здесь может быть дашборд с прогрессом студента или другая полезная информация.</p>
    </div>
  );
};

export default HomePage; 