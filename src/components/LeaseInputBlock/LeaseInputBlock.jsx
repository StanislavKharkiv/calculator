import React from 'react';

export default function LeaseInputBlock({ header, value, moneyMask, onChange, name }) {
  return (
    <div className="lease-block">
      <h2 className="lease-block__header">{header}</h2>
      {moneyMask ? <span>$</span> : null}
      <input type="number" value={value} onChange={onChange} name={name} />
    </div>
  );
}
