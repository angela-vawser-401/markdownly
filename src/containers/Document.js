import React from 'react';
import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { updateMarkdown } from '../actions/editorActions';
import { getActiveMarkdown } from '../selector/markdownSelector';

// eslint-disable-next-line react/prop-types
const Document = ({ activeMarkdown, handleMarkdownChange }) => {
  return (
    <>
      <div className={styles.Document}>
        <Editor
          activeMarkdown={activeMarkdown}
          handleMarkdownChange={handleMarkdownChange}
        />
        <Preview
          activeMarkdown={activeMarkdown}
        />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  handleMarkdownChange({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

const mapStateToProps = state => ({
  activeMarkdown: getActiveMarkdown(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
