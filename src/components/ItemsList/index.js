import React from 'react';
import Item from '../Item';
export default function ItemsList({records, currencyRate, deleteBudgetItem}) {
  console.log("Records ->>", records);
  return (
    records.map(item => (
        <Item 
          {...item} 
          currencyRate={currencyRate} 
          key={item.id} 
          onDelete={() => deleteBudgetItem(item)} 
        />
      ))
  );
}

