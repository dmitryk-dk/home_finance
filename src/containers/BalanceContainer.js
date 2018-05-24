import Balance from '../components/Balance/index';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  records: state.controlRecords.records.filter(record => {
    if (state.controlRecords.currencyFilter) {
      return record.currency === state.controlRecords.currencyFilter
    }
    return record;
  }),
  currencyRate: state.currencyRate.currencyRate,
});

export default connect(mapStateToProps)(Balance);
