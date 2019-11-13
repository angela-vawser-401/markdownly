import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import Tabs from '../../containers/Tabs';
import Save from './Save';

function Editor({ markdown, handleMarkdownChange }) {
  return (
    <section className={styles.Editor}>
      <Tabs />
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <Save />
    </section>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

export default Editor;
