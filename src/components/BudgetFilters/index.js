import React from 'react';

export default function ({}) {
  return (
    <div className="App-tableFilters">
      <label>
        Display amounts in
        <Select
          options={[
            { value: 'usd', label: '$' },
            { value: 'eur', label: 'eur' },
          ]}
          name="currency"
          value={currency}
          onChange={onCurrencyChange}
          className="AddItem-select"
        />
      </label>
      <label>
        <input type="text" name="" onChange={}/>
      </label>
    </div>
  );
}
