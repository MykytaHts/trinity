import { Editor } from '@tiptap/react';
import styles from './MenuBar.module.scss';
import {
  FaBold, FaItalic, FaStrikethrough, FaCode, FaHeading, FaListUl, FaListOl, FaQuoteLeft, FaRulerHorizontal, FaUndo, FaRedo, FaParagraph,
  FaLink
} from 'react-icons/fa';

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className={styles.menuBar}>
      <button onClick={() => editor.chain().focus().toggleBold().run()} title="Bold" className={editor.isActive('bold') ? styles.isActive : ''}><FaBold /></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic" className={editor.isActive('italic') ? styles.isActive : ''}><FaItalic /></button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()} title="Strikethrough" className={editor.isActive('strike') ? styles.isActive : ''}><FaStrikethrough /></button>
      <button onClick={setLink} title="Link" className={editor.isActive('link') ? styles.isActive : ''}><FaLink /></button>
      <button onClick={() => editor.chain().focus().toggleCode().run()} title="Code" className={editor.isActive('code') ? styles.isActive : ''}><FaCode /></button>
      
      <div className={styles.divider}></div>

      <button onClick={() => editor.chain().focus().setParagraph().run()} title="Paragraph" className={editor.isActive('paragraph') ? styles.isActive : ''}><FaParagraph /></button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Heading 1" className={editor.isActive('heading', { level: 1 }) ? styles.isActive : ''}>H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2" className={editor.isActive('heading', { level: 2 }) ? styles.isActive : ''}>H2</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3" className={editor.isActive('heading', { level: 3 }) ? styles.isActive : ''}>H3</button>

      <div className={styles.divider}></div>
      
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet List" className={editor.isActive('bulletList') ? styles.isActive : ''}><FaListUl /></button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered List" className={editor.isActive('orderedList') ? styles.isActive : ''}><FaListOl /></button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code Block" className={editor.isActive('codeBlock') ? styles.isActive : ''}><FaCode /></button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote" className={editor.isActive('blockquote') ? styles.isActive : ''}><FaQuoteLeft /></button>

      <div className={styles.divider}></div>

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule"><FaRulerHorizontal /></button>
      <button onClick={() => editor.chain().focus().undo().run()} title="Undo"><FaUndo /></button>
      <button onClick={() => editor.chain().focus().redo().run()} title="Redo"><FaRedo /></button>
    </div>
  );
}; 