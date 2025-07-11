import styles from './LessonCatalogPage.module.scss'; // Re-using styles for now

const HomeworkPage = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.title}>Центр Заданий</h1>
      <p>Здесь будет отображаться список всех ваших практических заданий.</p>
    </div>
  );
};

export default HomeworkPage; 