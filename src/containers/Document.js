import React from 'react';
import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import PropTypes from 'prop-types';
import { updateMarkdown } from '../actions/editorActions';


const Document = ({ markdown, handleMarkdownChange }) => {
  return (
    <>
      <div className={styles.Document}>
        <Editor
          markdown={markdown}
          handleMarkdownChange={handleMarkdownChange}
        />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleMarkdownChange({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

const mapStateToProps = state => ({
  markdown: state.markdown
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

// export default class Document extends PureComponent {
//   state = {
//     markdown: '# Hi there'
//   };

//   updateMarkdown = ({ target }) => {
//     this.setState({ markdown: target.value });
//   };

//   render() {
//     const { markdown } = this.state;
//     return (
//       <>
//         <div className={styles.Document}>
//           <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
//           <Preview markdown={markdown} />
//         </div>
//       </>
//     );
//   }
// }
