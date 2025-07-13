import { useState, useEffect, ReactNode } from 'react';
import styles from './InfoBlock.module.scss';
import { FiInfo, FiX } from 'react-icons/fi';

type InfoBlockProps = {
  id: string; // Unique ID for localStorage
  title: string;
  children: ReactNode;
  className?: string;
};

const InfoBlock = ({ id, title, children, className }: InfoBlockProps) => {
  const storageKey = `infoBlock-${id}-closed`;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isClosed = localStorage.getItem(storageKey);
    if (isClosed !== 'true') {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.infoBlock} ${className || ''}`}>
      <FiInfo className={styles.infoIcon} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
      <button className={styles.closeButton} onClick={handleClose}>
        <FiX />
      </button>
    </div>
  );
};

export default InfoBlock; 