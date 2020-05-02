import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import styles from './Waiter.module.scss';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { render } from 'enzyme';
import Axios from 'axios';

class WaiterOrderNew extends React.Component {
  
  static propTypes = {
    fetchProducts: PropTypes.func,
    products: PropTypes.array,
    
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType(PropTypes.bool,PropTypes.string),
    }),
   
  }

state = {
  persons: [],
};

componentDidMount(){
  const { fetchProducts } = this.props;
  fetchProducts();
}

render() {
   
  return (

    <div className={styles.component}>
      <FormControl>
        <InputLabel>WYbierz potrawę</InputLabel>
      
      </FormControl>
    </div>
  );
    
}


}
export default WaiterOrderNew;