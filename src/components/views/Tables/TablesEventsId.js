import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
const TablesEventsId = ({match}) =>{

  return(
    <div className={styles.component}>
      <h2>Rezerwacja Eventu nr {match.params.id}</h2>
    </div>
  );};
TablesEventsId.propTypes = {
  match: PropTypes.string,
      
};
export default TablesEventsId;
