import AddItem from '../components/AddItem/index';
import {connect} from 'react-redux';
import {addBudgetItem} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  addBudgetItem: (records) => dispatch(addBudgetItem(records)),
});

export default connect(null, mapDispatchToProps)(AddItem);

