import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';
import styles from './ArticleListPage.module.scss';
import { FaPlus } from 'react-icons/fa';

export const ArticleListPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Статьи</h1>
        <Link to="/admin/articles/new" className={styles.createButton}>
          <FaPlus />
          <span>Создать</span>
        </Link>
      </div>
      <div className={styles.cardsGrid}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}; 