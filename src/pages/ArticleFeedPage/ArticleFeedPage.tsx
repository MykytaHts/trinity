import { Link } from 'react-router-dom';
import { articles } from '../../features/admin/data/articles';
import styles from './ArticleFeedPage.module.scss';

export const ArticleFeedPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Статьи и материалы</h1>
      <div className={styles.feed}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <Link to={`/articles/${article.id}`} key={article.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardMeta}>
                Автор: {article.author} | Опубликовано: {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </Link>
          ))
        ) : (
          <p>Пока здесь нет ни одной статьи.</p>
        )}
      </div>
    </div>
  );
}; 