import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import styles from './Waiter.module.scss';

import { Link } from 'react-router-dom';


const WaiterOrderNew = () => {
  
  return (
    <Container>
      <Paper className={styles.component}>
        <h2>New order</h2>
        <Button  component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>save</Button>
        
      </Paper>
    </Container>
  );
};

export default WaiterOrderNew;