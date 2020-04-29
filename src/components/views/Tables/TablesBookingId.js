import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesBookingId = ({match}) => {

  return (
    <div className={styles.component}>
      <h2>TablesBookingId view {match.params.id}</h2>
    </div>
  );};

TablesBookingId.propTypes = {
  match: PropTypes.string,
        
};
export default TablesBookingId;