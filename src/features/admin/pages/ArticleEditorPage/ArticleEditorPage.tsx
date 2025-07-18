
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import rust from 'highlight.js/lib/languages/rust';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from 'src/features/admin/data/articles';
import styles from './ArticleEditorPage.module.scss';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import toast from 'react-hot-toast';

const lowlight = createLowlight();
lowlight.register('rust', rust);

export const ArticleEditorPage = () => {
  const { id } = useParams();
  const [articleToEdit, setArticleToEdit] = useState<any | null>(null);
  const [title, setTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');

  useEffect(() => {
    const foundArticle = articles.find((a) => a.id === id);
    if (foundArticle) {
      setArticleToEdit(foundArticle);
      setTitle(foundArticle.title);
      setArticleContent(foundArticle.content);
    }
  }, [id]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: articleToEdit ? articleToEdit.content : '',
    onUpdate: ({ editor }) => {
      setArticleContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(articleContent);
    }
  }, [articleContent, editor]);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Title cannot be empty!');
      return;
    }

    const savePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const articleToUpdate = articles.find((a) => a.id === id);
        if (articleToUpdate) {
          articleToUpdate.title = title;
          articleToUpdate.content = articleContent;
          console.log('Updated article in memory:', articleToUpdate);
          resolve('Article saved successfully!');
        } else {
          reject('Article not found!');
        }
      }, 1000); // Simulate network delay
    });

    toast.promise(savePromise, {
      loading: 'Saving...',
      success: 'Article saved successfully!',
      error: 'Failed to save',
    });
  };

  if (!editor) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.titleWrapper}>
        <label htmlFor="articleTitle" className={styles.titleLabel}>
          Article Title
        </label>
        <input
          id="articleTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for your article..."
          className={styles.titleInput}
        />
      </div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={styles.editorContent} />
      <button onClick={handleSave} className={styles.saveButton}>
        Сохранить
      </button>
    </div>
  );
}; 