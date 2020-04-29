import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
const Waiter = () => {

  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>

      <Link to='/panel/waiter/order/new'>Zarezerwuj Event </Link><br/>
      <Link to='/panel/waiter/order/:id' >Lista zarezerwowanych eventów </Link><br/>
    </div>
  );};

export default Waiter;