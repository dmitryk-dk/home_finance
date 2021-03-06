import ItemsList from '../components/ItemsList/index';
import {connect} from 'react-redux';
import {deleteBudgetItem} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  deleteBudgetItem: (records) => dispatch(deleteBudgetItem(records)),
});

const mapStateToProps = (state) => ({
  records: state.controlRecords.records.filter(record => {
    if (state.controlRecords.currencyFilter) {
      return record.currency === state.controlRecords.currencyFilter
    }
    return record;
  }),
  currencyRate: state.currencyRate.currencyRate,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

