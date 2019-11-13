import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdown }) {
  return (
    <section className={styles.Editor}>
      <div>
        <button className={styles.active} type="radio">tab 1</button>
        <button type="radio">tab 2</button>
        <button type="radio">tab 3</button>
        <button type="radio">+</button>
      </div>
      <textarea value={markdown} onChange={updateMarkdown} />
    </section>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
