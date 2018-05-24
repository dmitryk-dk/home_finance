import * as actionTypes from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
  records: [],
  currencyRate: 1.114,
  currencyFilter: '',
}

export function controlRecords(state=initialState, action) {
  switch(action.type) {
    case actionTypes.ADD_BUDGET_ITEM:
      const record = Object.assign({}, action.record);
      record.date = moment(new Date()).format("DD/MM/YYYY HH:mm:ss.SSS");
      record.id =  Math.random().toString(36).substr(2, 9);
      return Object.assign({}, state, {records: [
        ...state.records.concat(record)
      ]});
    case actionTypes.DELETE_BUDGET_ITEM:
      return Object.assign({}, state, {records: [
        ...state.records.filter(item => item.id !== action.record.id)
      ]});
    case actionTypes.CHANGE_CURRENCY_TYPE:
      return Object.assign({}, state, {
        currencyFilter: action.currencyType,
      });
    case actionTypes.DISABLE_FILTER:
      return Object.assign({}, state, {
        currencyFilter: '',
      });
    default:
      return state;
  }
}

export function currencyRate(state=initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENCY_RATE:
    return Object.assign({}, state, {
      currencyRate: action.currencyRate,
    });
    default:
      return state;
  }
}
