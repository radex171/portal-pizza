import { connect } from 'react-redux';
import WaiterOrderNew from './WaiterOrderNew';
import { getAll, fetchProductsFromAPI, getLoadingState } from '../../../redux/ProductRedux';

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),

});

export default connect(mapStateToProps, mapDispatchToProps)(WaiterOrderNew);