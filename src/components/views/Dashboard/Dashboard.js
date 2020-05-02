import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {

  return (
    <Paper className={styles.component}>
      <TableHead>
        <TableRow>
          <Typography variant="h4">Informacje ogólne</Typography>
        </TableRow><br/><br/>

        <TableRow>
          <TableCell> <Typography variant="h6">ilość zamówień w lokalu</Typography></TableCell>
          <TableCell> <Typography variant="h6">ilość zamówień na dostawę</Typography></TableCell>
          <TableCell> <Typography variant="h6">Suma</Typography></TableCell>
        </TableRow>

    

      </TableHead>
    </Paper>
  );};

export default Dashboard;