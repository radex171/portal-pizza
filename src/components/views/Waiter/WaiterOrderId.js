import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const demoDish = [
  {
    id: '12',
    dishName: 'pizza',
    options: ['Tomato', 'Mushroooms', 'standard'],
  },
];
const WaiterOrderId = ({ match }) => {

  return (
    <div className={styles.component}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <Typography variant="h4">
                Order No {match.params.id}
              </Typography><br /><br />

            </TableRow>
          </TableHead>
          <TableBody>
            {demoDish.map(row => (
              <TableRow key={row.id}>

                <TableCell component="th" scope="row">
                  <Typography variant="h5">
                    {row.dishName}
                  </Typography>

                  {row.options.map(params => (
                    <TableCell key={params}>{params}</TableCell>
                  ))}

                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

WaiterOrderId.propTypes = {
  match: PropTypes.string,
};
export default WaiterOrderId;