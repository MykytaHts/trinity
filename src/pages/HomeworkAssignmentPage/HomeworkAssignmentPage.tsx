import { useParams } from 'react-router-dom';
import { homeworkList } from '../../data/homework';
import styles from './HomeworkAssignmentPage.module.scss';

const HomeworkAssignmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const homework = homeworkList.find((hw) => hw.id === id);

  if (!homework) {
    return <div>Задание не найдено!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.breadcrumb}>Центр Заданий /</p>
        <h1 className={styles.title}>{homework.title}</h1>
        <p className={styles.description}>{homework.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.taskSection}>
          <h2>Описание Задачи</h2>
          <p>
            Здесь будет подробное описание задачи, условия и примеры, которые помогут вам
            справиться с заданием.
          </p>
        </div>

        <div className={styles.editorSection}>
          <h2>Редактор Кода</h2>
          <div className={styles.editorPlaceholder}>
            <p>Компонент редактора кода появится здесь позже.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkAssignmentPage; 