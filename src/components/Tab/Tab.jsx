import React from 'react';
import './main.scss';

export default function Tab({ name, money, active, onClick }) {
  return (
    <div
      style={name === 'Loan' ? { borderBottomRightRadius: '10px' } : { borderBottomLeftRadius: '10px' }}
      className={`tab ${active}`}
      data-name={name.toLowerCase()}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={name === 'Loan' ? 0 : 1}
    >
      <h3 className="tab__header">{`Est. ${name}:`}</h3>
      <div className="tab__money">
        <span>{`$${money}`}</span>
        /mo
      </div>
    </div>
  );
}
