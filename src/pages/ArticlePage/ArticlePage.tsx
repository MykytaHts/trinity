import { useParams } from 'react-router-dom';
import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import rust from 'highlight.js/lib/languages/rust';
import 'highlight.js/styles/a11y-dark.css'; // Changed to a valid, similar theme
import { articles } from '@/features/admin/data/articles';
import styles from './ArticlePage.module.scss';
import { CodeBlockComponent } from '@/components/CodeBlockComponent/CodeBlockComponent';
import type { Article } from '@/features/admin/types/article';

const lowlight = createLowlight();
lowlight.register('rust', rust);

const ArticleView = ({ article }: { article: Article }) => {
  const editor = useEditor({
    editable: false,
    content: article.content,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),
    ],
  });

  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>
          By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
        </p>
      </div>
      <EditorContent editor={editor} className={styles.articleContent} />
    </div>
  );
};

export const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Article not found</h1>
        <p>Sorry, we couldn't find the article you're looking for.</p>
      </div>
    );
  }

  return <ArticleView article={article} />;
}; 