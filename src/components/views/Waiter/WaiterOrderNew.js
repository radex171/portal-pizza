/* eslint-disable react/jsx-key */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './Waiter.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

class WaiterOrderNew extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    products: PropTypes.array,
  }
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const { products } = this.props;

    return (
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <Typography variant="h5">
              Nowe zamowienie
            </Typography>
          </TableHead>
          <TableBody>
            <TableRow>
              <FormControl>
                <InputLabel>Potrawy
                  <Select native defaultValue="" id="dish" className={styles.selectDish}>
                    {products.map(prod => (
                      <option value={prod.id}>{prod.idName}</option>
                    ))}
                  </Select>
                </InputLabel>
              </FormControl>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default WaiterOrderNew;