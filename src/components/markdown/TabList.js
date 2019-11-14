import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

const TabList = ({ activeIndex, list, handleTabClick, handleTabClose }) => {

  return (
    <div>
      {list.map((item, idx) => (
        <div
          key={item}
          className={activeIndex === idx ? styles.active : styles.tab} >
          <span onClick={() => { handleTabClick(idx); }}
          >{`tab ${idx}`}</span>
          <button onClick={() => handleTabClose(idx)}>x</button>
        </div>
      ))}
      <button className={styles.addTab} >+</button>
    </div>
  );
};

TabList.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleTabClick: PropTypes.func.isRequired,
  handleTabClose: PropTypes.func.isRequired
};

export default TabList;
