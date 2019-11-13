import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, handleMarkdownChange }) {
  return (
    <section className={styles.Editor}>
      <div>
        <button className={styles.active} type="radio">tab 1</button>
        <button type="radio">tab 2</button>
        <button type="radio">tab 3</button>
        <button type="radio">+</button>
      </div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
    </section>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

export default Editor;
