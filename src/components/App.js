import React from 'react';
import Document from '../containers/Document';
import styles from './Main.css';

export default function App() {
  return (
    <>
      <h1 className={styles.Header}>Markdown Editor</h1>
      <Document className={styles.Main}/>
    </>
  );
}
