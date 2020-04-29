import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderId = ({match}) => {

  return (
    <div className={styles.component}>
      <h2>WaiterOrderId view {match.params.id}</h2>
    </div>
  );};
  
WaiterOrderId.propTypes = {
  match: PropTypes.string,
};
export default WaiterOrderId;