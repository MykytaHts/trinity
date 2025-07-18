import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import styles from './ArticleCard.module.scss';
import type { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Link to={`/articles/${article.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{article.title}</h3>
        </Link>
        <div className={styles.meta}>
          <span>Автор: {article.author}</span>
          <span className={styles.date}>
            {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '—'}
          </span>
        </div>
      </div>
      <div className={styles.actions}>
        <Link to={`/admin/articles/edit/${article.id}`} className={styles.actionIcon} title="Редактировать">
          <FiEdit />
        </Link>
        <button className={styles.actionIcon} title="Удалить">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}; 