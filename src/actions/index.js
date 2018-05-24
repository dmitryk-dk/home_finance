import * as actionTypes from './actionTypes';

export function addBudgetItem(record) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_BUDGET_ITEM,
      record,
    });
  } 
}

export function deleteBudgetItem(record) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_BUDGET_ITEM,
      record,
    });
  } 
}

export function changeCurrencyType(currencyType) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_CURRENCY_TYPE,
      currencyType,
    });
  }
}

export function changeCurrencyRate(currencyRate) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_CURRENCY_RATE,
      currencyRate,
    });
  }
}

export function disableFilter() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DISABLE_FILTER,
    });
  }
}
