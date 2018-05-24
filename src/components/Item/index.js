import React from 'react';
import Arrow from '../Arrow';
import './styles.css';

function makeValue(currency, currencyRate, value) {
  if (currency === 'eur') {
    return (
        <div>
            <p>
                <span dangerouslySetInnerHTML={{__html: `&dollar;&nbsp;`}}/>
                {parseFloat(value * currencyRate).toFixed(2)}
            </p>
            <small>
                <span dangerouslySetInnerHTML={{__html: `&euro;&nbsp;`}}/>
                {parseFloat(value).toFixed(2)}
            </small>
        </div>
    );
  }
  return (
    <p>
        <span dangerouslySetInnerHTML={{__html: `&dollar;&nbsp;`}}/>
        {parseFloat(value).toFixed(2)}
    </p>
  )
}

export default function Item({ type, currency, value, description, date, currencyRate, onDelete}) {
  return (
    <div className="Item-container">
        <div className="Item-arrowHolder">
            <Arrow isIncome={type} />
        </div>
        <div className="Item-textHolder">
            <p>{description}</p>
            <small>{date}</small>
        </div>
        <div className="Item-currencyHolder">
            { type > 0 ? '--': makeValue(currency, currencyRate, value) }
        </div>
        <div className="Item-currencyHolder">
            { type < 0 ? '--': makeValue(currency, currencyRate, value) }
        </div>
        <div className="Item-buttonHolder">
            <button onClick={onDelete}>
                delete
            </button>
        </div>
    </div>
  );
}
