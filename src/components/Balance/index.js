import React from 'react';
import cx from 'classnames';
import './styles.css'

export default function Balance ({ records=[], currencyRate }) {
  const sum = records
    .map(record => {
      if (record.currency === 'eur') {
        return record.type * parseFloat(record.value).toFixed(2) * currencyRate;
      }
      return record.type * record.value;
    })
    .reduce((prevItem, currentItem) => prevItem + currentItem, 0);
  const balance = (sum < 0 ? -1 * sum: sum).toFixed(2);
  return (
    <div className="Balance-container">
      <div className="Balance-text"><strong>Balance</strong></div>
      <div className={cx("Balance-value", {'is-negative': sum < 0})}>{balance}</div>
    </div>
  );
}
