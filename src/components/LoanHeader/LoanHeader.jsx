import React from 'react';
import './main.scss';

export default function LoanHeader({ price }) {
  return (
    <div className="price">
      <span className="price__money">{`$${price}`}</span>
      <h1 className="price__header">Suggested price:</h1>
      <p className="price__details">See price details</p>
    </div>
  );
}
