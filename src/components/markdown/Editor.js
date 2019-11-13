import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import Tabs from '../../containers/Tabs';
import SaveContainer from '../../containers/SaveContainer';

function Editor({ markdown, handleMarkdownChange }) {
  return (
    <section className={styles.Editor}>
      <Tabs />
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <SaveContainer />
    </section>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

export default Editor;
