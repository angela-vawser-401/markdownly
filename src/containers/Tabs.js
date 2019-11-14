import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TabList from '../components/markdown/TabList';
import { setActiveTab, deleteTab } from '../actions/editorActions';
import { getMarkdownArray, getActiveIndex } from '../selector/markdownSelector';

// eslint-disable-next-line react/prop-types
const Tabs = ({ activeIndex, list, handleTabClick, handleTabClose }) => {
  return (
    <TabList list={list} activeIndex={activeIndex} handleTabClick={handleTabClick} handleTabClose={handleTabClose} />
  );
};

const mapStateToProps = state => ({
  activeIndex: getActiveIndex(state),
  list: getMarkdownArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleTabClick(num) {
    dispatch(setActiveTab(num));
  },
  handleTabClose(num) {
    dispatch(deleteTab(num));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
