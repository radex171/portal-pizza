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
      error: PropTypes.oneOfType(PropTypes.bool,PropTypes.string),
    }),
   
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(orderId, status){
    const { updateStatus } = this.props;
    switch (status) {
      case 'free':
        return (
          
          <>
            <Button onClick={() => updateStatus(orderId, 'thinking')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>thinking</Button>
            <Button onClick={() => updateStatus(orderId, 'New order')} component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Button>

          </>
        
        );
      case 'thinking':
        return (
          <Button onClick={() => updateStatus(orderId, 'Thinking')}>Thinking</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => updateStatus(orderId, 'Prepared')}>Prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => updateStatus(orderId, 'Delivered')}>Delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => updateStatus(orderId, 'Paid')}>Paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => updateStatus(orderId, 'Free')}>Free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
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
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }

}



export default Waiter;