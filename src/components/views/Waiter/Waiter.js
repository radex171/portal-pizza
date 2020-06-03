import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.array,
    updateStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),

  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(orderId, status) {
    const { updateStatus } = this.props;
    switch (status) {
      case 'free':

        return (
          <div>
            <Button onClick={() => updateStatus(orderId, 'thinking')}>thinking</Button>
            <Button onClick={() => updateStatus(orderId, 'ordered')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Button>
          </div>
        );

      case 'thinking':
        return (
          <Button onClick={() => updateStatus(orderId, 'ordered')}>Ordered</Button>
        );

      case 'ordered':
        return (
          <Button onClick={() => updateStatus(orderId, 'prepared')}>Prepared</Button>
        );

      case 'prepared':
        return (
          <Button onClick={() => updateStatus(orderId, 'delivered')}>Delivered</Button>
        );

      case 'delivered':
        return (
          <Button onClick={() => updateStatus(orderId, 'paid')}>Paid</Button>
        );

      case 'paid':
        return (
          <Button onClick={() => updateStatus(orderId, 'free')}>Free</Button>
        );

      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <Paper >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Table/Delivery</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>

                    <TableCell>
                      {row.order && (
                        <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {row.placeOrder}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row.id, row.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <br /><br /><br />
          <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
            + Add new order
          </Button>
        </div>
      );
    }
  }
}

export default Waiter;