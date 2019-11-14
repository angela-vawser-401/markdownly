import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

const TabList = ({ activeIndex, list, handleTabClick }) => {

  return (
    <div>
      {list.map((item, idx) => (
        <button
          key={item}
          onClick={() => { handleTabClick(idx); }}
          className={activeIndex === idx ? styles.active : styles.tabButton} >
          {`tab ${idx}`}
        </button>
      ))}
      <button className={styles.addTab} >+</button>
    </div>
  );
};

TabList.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleTabClick: PropTypes.func.isRequired
};

export default TabList;
