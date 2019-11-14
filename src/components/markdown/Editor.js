import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import Tabs from '../../containers/Tabs';
import SaveContainer from '../../containers/SaveContainer';

function Editor({ active, handleMarkdownChange }) {
  return (
    <section className={styles.Editor}>
      <Tabs />
      <textarea value={active} onChange={handleMarkdownChange} />
      <SaveContainer />
    </section>
  );
}

Editor.propTypes = {
  active: PropTypes.string.isRequired,
  markdown: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

export default Editor;
