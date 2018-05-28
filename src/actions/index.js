import * as actionTypes from './actionTypes';

export function addBudgetItem(record) {
  return {
    type: actionTypes.ADD_BUDGET_ITEM,
    record,
  }
}

export function deleteBudgetItem(record) {
  return {
    type: actionTypes.DELETE_BUDGET_ITEM,
    record,
  }
}

export function changeCurrencyType(currencyType) {
  return {
    type: actionTypes.CHANGE_CURRENCY_TYPE,
    currencyType,
  }
}

export function changeCurrencyRate(currencyRate) {
  return {
    type: actionTypes.CHANGE_CURRENCY_RATE,
    currencyRate,
  }
}

export function disableFilter() {
  return {
    type: actionTypes.DISABLE_FILTER,
  }
}
