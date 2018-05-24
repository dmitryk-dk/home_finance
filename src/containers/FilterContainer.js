import Filter from '../components/Filter/index';
import {connect} from 'react-redux';
import {changeCurrencyRate, changeCurrencyType, disableFilter} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  changeCurrencyRate: (currencyRate) => dispatch(changeCurrencyRate(currencyRate)),
  changeCurrencyType: (currencyType) => dispatch(changeCurrencyType(currencyType)),
  disableFilter: () => dispatch(disableFilter()),
});

const mapStateToProps = (state) => ({
  currencyRate: state.currencyRate.currencyRate,
  currencyFilter: state.controlRecords.currencyFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

