import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Editor.css';

const Tab = () => {

  return (
    <div>
      <button className={styles.active} type="radio">tab 1</button>
      <button className={styles.tabButton} type="radio">tab 2</button>
      <button className={styles.tabButton} type="radio">tab 3</button>
      <button className={styles.addTab} type="radio">+</button>
    </div>
  );

};

// TabCard.propTypes = {

// };

export default Tab;
