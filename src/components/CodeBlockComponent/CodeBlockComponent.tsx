import React, { useState } from 'react';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { FaClipboard, FaCheck } from 'react-icons/fa';
import styles from './CodeBlockComponent.module.scss';

export const CodeBlockComponent = ({ node }) => {
  const { language: defaultLanguage } = node.attrs;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = node.textContent;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <NodeViewWrapper className={styles.codeBlock}>
      <div className={styles.header}>
        <span className={styles.language}>{defaultLanguage || 'auto'}</span>
        <button onClick={handleCopy} className={styles.copyButton} aria-label="Copy code">
          {copied ? <FaCheck /> : <FaClipboard />}
        </button>
      </div>
      <pre style={{ padding: '1.25rem 1.5rem' }}>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
}; 