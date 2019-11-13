import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Editor.css';

const TabCard = () => {

  return (
    <div>
      <button className={styles.active} type="radio">tab 1</button>
      <button type="radio">tab 2</button>
      <button type="radio">tab 3</button>
      <button type="radio">+</button>
    </div>
  );

};

// TabCard.propTypes = {

// };

export default TabCard;
