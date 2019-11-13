import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TabList from '../components/markdown/TabList';


const Tabs = () => {
  return (
    <TabList />
  );
};

export default Tabs;
// Document.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   handleMarkdownChange: PropTypes.func.isRequired
// };

// const mapDispatchToProps = dispatch => ({
//   handleMarkdownChange({ target }) {
//     dispatch(updateMarkdown(target.value));
//   }
// });

// const mapStateToProps = state => ({
//   markdown: state.markdown
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Document);

